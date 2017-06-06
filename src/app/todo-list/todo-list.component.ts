import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  toDos = [
    {title: 'Test Todo 1', description: 'Test Todo Description', status: 'Pending'},
    {title: 'Test Todo 2', description: 'Test Todo Description', status: 'Blocked'},
    {title: 'Test Todo 3', description: 'Test Todo Description', status: 'Paused'},
    {title: 'Test Todo 4', description: 'Test Todo Description', status: 'Completed'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
