import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
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

  constructor(private route: ActivatedRoute, private transaction: TransactionApiService, private navigation: NavController) { }

  param = {
    transactionId: ""
  }

  transactionData = this.transaction.initDetail()
  selectedFile: File | null = null;

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

  approveTransaction(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  rejectTransaction() {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.uploadFile();
    }
  }

  uploadFile() {
    if (!this.selectedFile) return;

    this.transaction.uploadImage(this.selectedFile).subscribe({
      next: resp => {
        const imageUrl = resp.data.filename;
        this.updateTransactionWithImage(imageUrl);
        this.navigation.navigateForward("/mainapp/transaction/game")
      },
      error: err => {
        console.log(err)
      }
    });
  }

  private updateTransactionWithImage(fileUrl: string) {
    this.transaction.updateTransaction(this.param.transactionId, fileUrl).subscribe({
      next: resp => {
        console.log(resp)
      },
      error: err => {
        console.log(err)
      }
    });
  }
}
