import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ToDo } from '../common/models/toDo.model';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../auth/auth.service';


@Injectable ()
export class TodoListService {
  // FIREBASE Endpoint Declarations for User's TodoList
  private ENDPOINT = '/todoList';
  private usersTodoList: string;

  // Basic Attributes for TodoList Service
  private toDoList: ToDo[];
  private toDolistDB: FirebaseListObservable<any[]>;

  // Custom Observable for AddChild Event on ToDoList
  private onToDoListChildAdded = new Subject<string> ();

  constructor ( private db: AngularFireDatabase, private authService: AuthService ) {

    // Configure User's EndPoint with current connected user UID
    this.usersTodoList = this.ENDPOINT + '/' + this.authService.getUserUid ();

    // Get a List Instance for FireBase DB
    this.toDolistDB = db.list (this.usersTodoList);

    // Subscribe to DB and update TodoList Array with new values
    this.toDolistDB.subscribe (
        ( todos: ToDo[] ) => {
          this.toDoList = todos;
        }
    );
    // Subscribe to TodoList Events and look for Child Added Event and recover Key
     this.db.database.ref (this.usersTodoList).on ('child_added',
        ( dataSnapShot ) => {
          this.onToDoListChildAdded.next(dataSnapShot.key);
        });
  }

  // Functions for Acces to Entire TodoList
  getToDoListObservable () {
    return this.toDolistDB;
  }
  getToDoListAddChildObservable () {
    return this.onToDoListChildAdded;
  }
  getToDoListCurrentValues () {
    return this.toDoList;
  }
  getToDoListReference () {
    return this.db.database.ref(this.usersTodoList);
  }

  // Functions for Access to ToDoElement
  getToDoElementValue (key: string) {
    return this.db.database.ref(this.usersTodoList).child(key).once('value');
  }
  updateToDoElement (key: string, toDo: ToDo) {
    this.db.object(this.usersTodoList + '/' + key).update(toDo);
  }
  removeToDoElement (key: string) {
    this.db.object(this.usersTodoList + '/' + key).remove();
  }
  overwriteToDoElement (key: string, toDo: ToDo) {
    this.db.object(this.usersTodoList + '/' + key).set(toDo);
  }
}
