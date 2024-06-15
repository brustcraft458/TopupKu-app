import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionStatusPage } from './transaction-status.page';

describe('TransactionStatusPage', () => {
  let component: TransactionStatusPage;
  let fixture: ComponentFixture<TransactionStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
