import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';

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

  constructor(private storage: LocalStorageService) {}

  ngOnInit() {
  }

  async ionViewDidEnter() {
    await this.storage.onCreated
    this.initCacheInput()
  }

  async initCacheInput() {
    this.input.username = await this.storage.getItem('user_username')
  }

}
