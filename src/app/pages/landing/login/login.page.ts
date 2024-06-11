import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
    this.input.username = ""
    this.input.password = ""
  }

  async initCacheInput() {
    this.input.username = await this.storageService.getItem('user_username')
  }

  login() {
    this.authService.login(this.input).subscribe(res => {
      console.log("login respone", res)
      this.navController.navigateForward("/mainapp/transaction")
    })
  }

}
