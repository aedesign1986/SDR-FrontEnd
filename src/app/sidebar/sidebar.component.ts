import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Data } from '@angular/router';
import { appRoutes } from '../app-routing/app-routing.module';


declare const $: any;


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public actualState = 'Dashboard';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    $.getScript('../../assets/js/sidebar-moving-tab.js');
    this.menuItems = appRoutes.filter(item => item.data.menu);
    this.actualState = this.route.snapshot.data['title'];
    console.log(this.route);
    this.route.data.subscribe(
        (data: Data) => {
          console.log('Route Changed');
          console.log(data);
         this.actualState = data['title'];
    }
    );
  }


}
