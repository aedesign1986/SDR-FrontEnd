import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {
  public expanded: boolean;
  public isEditable: boolean;
  @Input()
  public toDo;

  constructor() { }

  ngOnInit() {
    this.expanded = false;
    this.isEditable = false;
  }

  onExpand() {
    this.expanded = true;
    console.log('Clicked', this.toDo, this.expanded);
  }

  onCompress() {
    this.expanded = false;
    this.isEditable = false;
  }

  onEditForm() {
    this.isEditable = !this.isEditable;
  }


}
