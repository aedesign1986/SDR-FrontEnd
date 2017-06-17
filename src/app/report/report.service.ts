import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DayReport } from '../common/models/dayReport.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ReportService {
  // TODO Implement Report Service

  private ENDPOINT = '/dailyReports';
  private usersReports: string;

  // Custom Observable for AddChild Event on ToDoList
  private onDailyReportChildAdded = new Subject<string> ();

  private reports: DayReport[];
  private reportsDB: FirebaseListObservable<any[]>;

  constructor(private authService: AuthService, private db: AngularFireDatabase) {
    // Configure User's EndPoint with current connected user UID
    this.usersReports = this.ENDPOINT + '/' + this.authService.getUserUid ();

    // Get a List Instance for FireBase DB
    this.reportsDB = db.list (this.usersReports);

    // Subscribe to DB and update reports Array with new values
    this.reportsDB.subscribe (
        ( dailyReports: DayReport[] ) => {
          this.reports = dailyReports;
        }
    );

    // Subscribe to DailyReport Events and look for Child Added Event and recover Key
    this.db.database.ref (this.usersReports).on ('child_added',
        ( dataSnapShot ) => {
          this.onDailyReportChildAdded.next(dataSnapShot.key);
        });
  }

  // Functions for Acces to Entire DailyReport
  getDailyReportObservable () {
    return this.reportsDB;
  }
  getDailyReportAddChildObservable () {
    return this.onDailyReportChildAdded;
  }
  getDailyReportCurrentValues () {
    return this.reports;
  }
  getDailyReportReference () {
    return this.db.database.ref(this.usersReports);
  }

  // Functions for Access to ToDoElement
  getReportElementValue (key: string) {
    return this.db.database.ref(this.usersReports).child(key).once('value');
  }
  updateReportElement (key: string, report: DayReport) {
    this.db.object(this.usersReports + '/' + key).update(report);
  }
  removeReportElement (key: string) {
    this.db.object(this.usersReports + '/' + key).remove();
  }
  overwriteReportElement (key: string, report: DayReport) {
    this.db.object(this.usersReports + '/' + key).set(report);
  }

}
