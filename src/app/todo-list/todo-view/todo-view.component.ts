import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDo } from '../../common/models/toDo.model';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  @Input()
  public toDo;


  constructor() { }

  ngOnInit() {

  }

}
