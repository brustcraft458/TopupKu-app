import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertPopupService {

  constructor(private alert: AlertController) { }

  async present({header, message}: any) {
    const theAlert = await this.alert.create({
      header: header,
      cssClass: 'custom-alert',
      message: message,
      buttons: [
        {
          text: 'Ok',
          cssClass: 'alert-button-ok',
          handler: () => {
            console.log('Ok clicked');
          }
        }
      ]
    });

    await theAlert.present();
  }
}
