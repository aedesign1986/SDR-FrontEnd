import { Component, DoCheck, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoListService } from '../todo-list.service';
import { ToDo } from '../../common/models/toDo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit, DoCheck {

  hasChanged = false;
  public isEditable: boolean;
  @ViewChild('todoEditForm')  toDoEditForm: NgForm;

  public toDo: ToDo;
  @Input()
  public toDoId: string;


  constructor(private todoListService: TodoListService) {
    this.isEditable = false;
  }

  ngOnInit() {
    this.todoListService.getToDoElementValue(this.toDoId).then(
        snapShot => this.toDo = snapShot.val()
    );
  }
  ngDoCheck () {
    this.checkFormModified();
  }

  onEditForm () {
    console.log('THIS TODO DATA OBJECT FROM REF', this.toDo);
    this.isEditable = !this.isEditable;
    this.toDo.id = this.toDoId;
    this.todoListService.updateToDoElement(this.toDoId, this.toDo);
  }

  private checkFormModified () {
    this.hasChanged = this.toDoEditForm.dirty;
  }

  onDiscardChanges () {
    this.todoListService.getToDoElementValue(this.toDoId)
        .then(
            snapShot => this.toDo = snapShot.val()
        );
  }
}
