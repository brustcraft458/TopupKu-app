import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { localText, rupiahText } from 'src/app/helpers/text';
import { TransactionApiService } from 'src/app/services/transaction-api.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.page.html',
  styleUrls: ['./transaction-detail.page.scss'],
})
export class TransactionDetailPage implements OnInit {
  localText = localText
  rupiahText = rupiahText

  constructor(private route: ActivatedRoute, private transaction: TransactionApiService) { }

  param = {
    transactionId: ""
  }

  transactionData = this.transaction.initDetail()

  ngOnInit() {
    this.param.transactionId = this.route.snapshot.paramMap.get('transaction_id') || "";
  }

  async ionViewWillEnter() {
    this.initTransactionText()
  }

  initTransactionText() {
    this.transaction.getDetail(this.param.transactionId).subscribe(resp => {
      this.transactionData = resp.data
    })
  }

}
