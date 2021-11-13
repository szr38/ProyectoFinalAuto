import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  buttons: sideBar[] = [
    { icon: 'toll', link: 'tank-1', text: 'Tanque 1' },
    { icon: 'grain', link: 'tank-2', text: 'Tanque 2' },
  ];
  opened: boolean;

  constructor() {}

  ngOnInit(): void {}
}

interface sideBar {
  icon: string;
  link: string;
  text: string;
}
