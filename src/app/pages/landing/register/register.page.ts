import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

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

  constructor(private authService: UserAuthService, private storageService: LocalStorageService, private navController: NavController) {}

  ngOnInit() {
    this.clearInput()
  }

  async ionViewWillEnter() {
    this.clearInput()
    await this.storageService.onCreated
    await this.initCacheInput()
  }

  clearInput() {
    this.input.emailOrPhone = ""
    this.input.username = ""
    this.input.password = ""
  }

  async initCacheInput() {
    this.input.emailOrPhone = await this.storageService.getItem('user_emailOrPhone')
    this.input.username = await this.storageService.getItem('user_username')
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
    this.storageService.setItem('user_emailOrPhone', this.input.emailOrPhone)
    this.storageService.setItem('user_username', this.input.username)

    // Send
    this.authService.register(form).subscribe(resp => {
      console.log("register_respone: ", resp)
      this.navController.navigateForward("/landing/login")
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
