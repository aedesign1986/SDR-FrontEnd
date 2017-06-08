import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  items: any[];
  pepes: any[];
  pepesDB: FirebaseListObservable<any[]>;
  itemsDB: FirebaseObjectObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.pepesDB = db.list('/todoList', {
      query: {
        orderByChild: 'id',
        equalTo: 0
      }
    });
    this.itemsDB = db.object('/todoList');
    console.log('works', this.pepesDB);
    console.log('works', this.itemsDB);
  }

  onTest() {
    console.log('TESt');
    console.log(this.items);
  }
  ngOnInit() {
    this.itemsDB.subscribe(
        params => this.items = params
    );
    this.pepesDB.subscribe(
        params => this.pepes = params
    );

    // firebase.initializeApp({
    //  apiKey: "AIzaSyCMpBX6QAKH0aCwAqjcaZNAw1fhZEoREtY",
    //  authDomain: "sdr-scrumdailyreport.firebaseapp.com",
    //  databaseURL: "https://sdr-scrumdailyreport.firebaseio.com",
    //  projectId: "sdr-scrumdailyreport",
    //  storageBucket: "sdr-scrumdailyreport.appspot.com",
    //  messagingSenderId: "972332990413"
    // });



  }
}
