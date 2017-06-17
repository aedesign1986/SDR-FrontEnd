import { Component, OnInit, ViewChild } from '@angular/core';

import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
import { ReportService } from './report.service';
import { DayReport, ScrumQuestions } from '../common/models/dayReport.model';
import { NgForm } from '@angular/forms';

@Component ({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: [ './report.component.css' ],
  providers: [ ReportService ]
})
export class ReportComponent implements OnInit {
  private reports: DayReport[];
  private reportDate = {date: {year: 2017, month: 6, day: 14}};
  @ViewChild ('reportEditForm')
  reportEditForm: NgForm;
  private currentReport: DayReport;

  private myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };

  constructor ( private reportService: ReportService ) {
    this.currentReport = null;
  }

  ngOnInit () {
    this.reports = this.reportService.getDailyReportCurrentValues ();
    this.reportService.getDailyReportObservable ().subscribe (
        ( dailyReports: DayReport[] ) => {
          this.reports = dailyReports;
        }
    );


  }

  onSubmit () {
    console.log ('FORM!!!', this.reportEditForm);
    const newReport = new DayReport ();
    const scrumquestions = new ScrumQuestions ();
    scrumquestions.whatYesterday = this.reportEditForm.value.whatYesterday;
    scrumquestions.whatToday = this.reportEditForm.value.whatToday;
    scrumquestions.areImpediments = this.reportEditForm.value.areImpediments;
    newReport.scrumQuestions = scrumquestions;
    console.log ('Created Report Object', newReport);
    this.reportService.getDailyReportObservable ().push (newReport);
  }

}
