import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AlertPopupService } from 'src/app/services/alert-popup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  input = {
    emailOrPhone: "",
    username: "",
    password: ""
  }

  constructor(private auth: UserAuthService, private storage: LocalStorageService, private navigation: NavController, private alert: AlertPopupService) {}

  ngOnInit() {
    this.clearInput()
  }

  async ionViewWillEnter() {
    this.clearInput()
    await this.initCacheInput()
  }

  private clearInput() {
    this.input.emailOrPhone = ""
    this.input.username = ""
    this.input.password = ""
  }

  async initCacheInput() {
    this.input.emailOrPhone = await this.storage.getItem('user_emailOrPhone')
    this.input.username = await this.storage.getItem('user_username')
  }

  register() {
    let emailPhone = this.validateEmailOrPhone(this.input.emailOrPhone)
    let form = {
      username: this.input.username,
      password: this.input.password,
      email: emailPhone.email,
      phone: emailPhone.phone
    }

    // Save Cache
    this.storage.setItem('user_emailOrPhone', this.input.emailOrPhone)
    this.storage.setItem('user_username', this.input.username)

    // Send
    this.auth.register(form).subscribe({
      next: async(resp) => {
        // Save
        await this.storage.setItem('user_username', this.input.username)

        // Redirect
        this.navigation.navigateForward("/landing/login")
      },
      error: (err) => {
        this.alert.present({header: err.message, message: err.debug})
      }
    })
  }

  private validateEmailOrPhone(text: string) {
    const phonePattern = /^\d{10,15}$/; // Adjust pattern based on your phone number format
    let edata = {
      email: "",
      phone: ""
    }

    if (phonePattern.test(text)) {
      edata.phone = text
    } else {
      edata.email = text
    }

    return edata
  }

}
