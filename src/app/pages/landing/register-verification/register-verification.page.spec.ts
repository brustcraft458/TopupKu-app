import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterVerificationPage } from './register-verification.page';

describe('RegisterVerificationPage', () => {
  let component: RegisterVerificationPage;
  let fixture: ComponentFixture<RegisterVerificationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
