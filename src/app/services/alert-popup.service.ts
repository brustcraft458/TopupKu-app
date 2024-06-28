import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { localAlertServer } from '../helpers/text';

@Injectable({
  providedIn: 'root'
})
export class AlertPopupService {

  constructor(private alert: AlertController) { }

  async present({header, message}: any) {
    let msgData = localAlertServer(header)
    let msgHead = msgData?.text || header
    let msgDesc = msgData?.desc || message

    const theAlert = await this.alert.create({
      header: msgHead,
      cssClass: 'custom-alert',
      message: msgDesc,
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
