import { Component, OnInit, input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-register-verification',
  templateUrl: './register-verification.page.html',
  styleUrls: ['./register-verification.page.scss'],
})
export class RegisterVerificationPage implements OnInit {
  input = {
    emailOrPhone: "",
    password: "",
    otp: ""
  }

  constructor(private storage: LocalStorageService) {}

  ngOnInit() {
  }

  async ionViewDidEnter() {
    await this.storage.onCreated
    this.initCacheInput()
  }

  async initCacheInput() {
    this.input.emailOrPhone = await this.storage.getItem('user_emailOrPhone')
  }

  verify() {}

}
