import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertPopupService } from 'src/app/services/alert-popup.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  input = {
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
    this.input.username = ""
    this.input.password = ""
  }

  async initCacheInput() {
    this.input.username = await this.storage.getItem('user_username')
  }

  login() {
    this.auth.login(this.input).subscribe({
      next: async(resp) => {
        // Save
        await this.storage.setItem('user_username', this.input.username)
        await this.storage.setItem('user_token', resp.token)
        console.log(resp)

        // Redirect
        this.navigation.navigateForward("/mainapp/transaction")
      },
      error: (err) => {
        this.alert.present({header: err.message, message: err.debug})
      }
    })
  }

}
