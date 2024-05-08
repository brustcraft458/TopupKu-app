/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.page.html',
  styleUrls: ['./topup.page.scss'],
})
export class TopupPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.hookElementComponent()
  }

  tesLog(str: string) {
    console.log(str)
  }

  private hookElementComponent() {
    // Additional
    const resetClassElement = (parrent: Element, query: string, classname: string) => {
      parrent.querySelectorAll(query).forEach(elm => {
        elm.classList.remove(classname)
      })
    }

    // Component
    const userSelectionClick = (element: Element, parrent: Element) => {
      resetClassElement(parrent, ".item", "selected")
      element.classList.add("selected")
    }

    // Hook
    document.querySelectorAll(".user-selection")?.forEach(parrent => {
      parrent.querySelectorAll(".item").forEach(child => {
        child.addEventListener("click", () => {userSelectionClick(child, parrent)})
      })
    })
  }

}
