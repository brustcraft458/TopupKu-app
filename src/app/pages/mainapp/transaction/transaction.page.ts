import { Component, OnInit } from '@angular/core';
import { TransactionApiService } from 'src/app/services/transaction-api.service';
import { rupiahText } from 'src/app/helpers/text';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  rupiahText = rupiahText
  transactionDataList = {
    pending: [],
    success: []
  }

  constructor(private transaction: TransactionApiService) { }

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

}
