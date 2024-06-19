import { Component, OnInit } from '@angular/core';
import { TransactionApiService } from 'src/app/services/transaction-api.service';
import { rupiahText, localText } from 'src/app/helpers/text';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  localText = localText
  rupiahText = rupiahText

  constructor(private transaction: TransactionApiService, private navigation: NavController) { }

  informationData = {
    pending: {
      user: 0,
      price: 0
    },
    success: {
      user: 0,
      price: 0
    }
  }

  transactionDataList = {
    pending: [this.transaction.initGameTotal()],
    success: [this.transaction.initGameTotal()]
  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.initTransactionText()
  }

  initTransactionText() {
    this.transaction.getGameTotal('pending').subscribe(resp => {
      // clear
      this.informationData.pending.user = 0
      this.informationData.pending.price = 0

      // data
      this.transactionDataList.pending = resp.data

      resp.data.forEach((item: any) => {
        this.informationData.pending.user += item.user_total
        this.informationData.pending.price += item.paid_total
      })
    })

    this.transaction.getGameTotal('success').subscribe(resp => {
      // clear
      this.informationData.success.user = 0
      this.informationData.success.price = 0

      // data
      this.transactionDataList.success = resp.data

      resp.data.forEach((item: any) => {
        this.informationData.success.user += item.user_total
        this.informationData.success.price += item.paid_total
      })
    })
  }

  redirectToPending(gameId: string) {
    this.navigation.navigateForward(`mainapp/transaction/game/pending/${gameId}`)
  }

  redirectToSuccess(gameId: string) {
    this.navigation.navigateForward(`mainapp/transaction/game/success/${gameId}`)
  }

}
