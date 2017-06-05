import { Component, OnInit } from '@angular/core';
import { APP_MENU } from './sideMenu.data';




declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  constructor() { }

  ngOnInit() {
    $.getScript('../../assets/js/sidebar-moving-tab.js');
    this.menuItems = APP_MENU;
  }

}
