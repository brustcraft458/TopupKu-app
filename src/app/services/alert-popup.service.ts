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
          text: 'No',
          role: 'cancel',
          cssClass: 'alert-button-no',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-yes',
          handler: () => {
            console.log('Yes clicked');
          }
        }
      ]
    });

    await theAlert.present();
  }
}
