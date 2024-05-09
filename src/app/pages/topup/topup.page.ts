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

    const userFormExpand = (element: Element, parrent: Element) => {
      resetClassElement(parrent, ".item", "hide")
      element.classList.add("hide")
    }

    // Hook
    document.querySelectorAll(".user-form")?.forEach(parrent => {
      let selectionElement = parrent.querySelector(".user-selection")
      selectionElement?.querySelectorAll(".item").forEach(child => {
        child.addEventListener("click", () => {userSelectionClick(child, parrent)})
      })

      let expandButton: any = parrent.querySelector(".expand")
      expandButton?.addEventListener("click", () => {userFormExpand(expandButton, parrent)})
    })
  }

}
