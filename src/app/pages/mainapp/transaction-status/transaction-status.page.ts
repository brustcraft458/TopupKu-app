import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { localText, rupiahText } from 'src/app/helpers/text'
import { TransactionApiService } from 'src/app/services/transaction-api.service';


@Component({
  selector: 'app-transaction-status',
  templateUrl: './transaction-status.page.html',
  styleUrls: ['./transaction-status.page.scss'],
})
export class TransactionStatusPage implements OnInit {
  localText = localText
  rupiahText = rupiahText

  param = {
    status: "",
    gameId: ""
  }

  transactionList = []

  constructor(private route: ActivatedRoute, private transaction: TransactionApiService) { }

  ngOnInit() {
    this.param.status = this.route.snapshot.paramMap.get('status') || "";
    this.param.gameId = this.route.snapshot.paramMap.get('game_id') || "";
  }

  async ionViewWillEnter() {
    this.initTransactionText()
  }

  initTransactionText() {
    this.transaction.getGameUsers(this.param.status, this.param.gameId).subscribe(resp => {
      this.transactionList = resp.data
    })
  }

}
