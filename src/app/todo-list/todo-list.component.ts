import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { ToDo } from '../common/models/toDo.model';

@Component ({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.css' ],
  providers: [ TodoListService ]
})
export class TodoListComponent implements OnInit {

  public toDos: ToDo[];
  selected: string;
  isTodoSelected: boolean;
  private newTodoAdded: boolean;

  public testToDos: ToDo[];

  constructor ( private toDoService: TodoListService ) {
    this.isTodoSelected = false;
    this.newTodoAdded = false;
  }

  ngOnInit () {
    this.toDos = this.toDoService.getToDoListCurrentValues ();
    this.toDoService.getToDoListObservable ().subscribe (
        ( todos: ToDo[] ) => {
          this.toDos = todos;
          console.log (this.toDos);
        }
    );
    this.toDoService.getToDoListAddChildObservable().subscribe(
        key => {
          if (this.newTodoAdded) {
            this.addTodoTriggered(key);
          }
        }
    );
  }

  onSelectTodo ( index: string ) {
    this.selected = index;
    this.isTodoSelected = true;
  }

  onCloseToDo () {
    this.selected = null;
    this.isTodoSelected = false;
  }

  onAddTodo () {
    this.newTodoAdded = true;
    this.toDoService.getToDoListObservable ().push ({
      id: '',
      title: 'Add a Todo Title',
      description: 'Add a Description for the Entered Todo'
    });
  }

  private addTodoTriggered(key: string) {
    console.log('New Todo Added Triggger', key);
    this.selected = key;
    this.isTodoSelected = true;
    this.newTodoAdded = false;
  }

}
