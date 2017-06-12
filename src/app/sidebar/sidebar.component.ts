import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


declare const $: any;


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuItems = [
    {path: '/SDR/dashboard', title: 'DashBoard'},
    {path: '/SDR/toDoList', title: 'ToDoList'},
    {path: '/SDR/report', title: 'Report'},
    {path: '/SDR/worklog', title: 'Worklog'},
    {path: '/SDR/resume', title: 'Resume'},
    {path: '/SDR/profile', title: 'Profile'}
  ];
  public actualState = 'Dashboard';
  constructor() { }

  ngOnInit() {
    $.getScript('../../assets/js/sidebar-moving-tab.js');
  }


}
