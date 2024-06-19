import { Component, OnInit } from '@angular/core';
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

  constructor(private transaction: TransactionApiService) { }

  informationData = this.transaction.initDetail()

  ngOnInit() {
  }

}
