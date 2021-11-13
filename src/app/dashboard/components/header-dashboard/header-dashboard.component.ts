import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.sass']
})
export class HeaderDashboardComponent implements OnInit, OnDestroy {

  @Output() openSidebar = new EventEmitter<boolean>();

  sidebar = true;

  walletSubs: Subscription = new Subscription();
  walletTotal: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSidebar() {
    this.sidebar = !this.sidebar;
    this.openSidebar.emit(this.sidebar)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.walletSubs.unsubscribe();
  }

}
