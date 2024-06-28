/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, Input } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent  implements OnInit {
  @Input() title: string = ''
  @Input() backRedirect: string = ''
  @Input() profileImg: string = ''

  constructor(private navigation: NavController, private platform: Platform) {}

  ngOnInit() {
  }

  redirectBack() {
    this.navigation.navigateBack(this.backRedirect)
  }

}
