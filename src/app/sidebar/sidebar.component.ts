import { Component, OnInit } from '@angular/core';
import { APP_MENU } from './sideMenu.data';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = APP_MENU;
  }

}
