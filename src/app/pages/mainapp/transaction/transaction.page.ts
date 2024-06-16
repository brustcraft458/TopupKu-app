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
  transactionDataList = {
    pending: [],
    success: []
  }

  constructor(private transaction: TransactionApiService, private navigation: NavController) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.initTransactionText()
  }

  initTransactionText() {
    this.transaction.getGameTotal('pending').subscribe(resp => {
      this.transactionDataList.pending = resp.data
    })

    this.transaction.getGameTotal('success').subscribe(resp => {
      this.transactionDataList.success = resp.data
    })
  }

  redirectToPending(gameId: string) {
    this.navigation.navigateForward(`mainapp/transaction/game/pending/${gameId}`)
  }

  redirectToSuccess(gameId: string) {
    this.navigation.navigateForward(`mainapp/transaction/game/success/${gameId}`)
  }

}
