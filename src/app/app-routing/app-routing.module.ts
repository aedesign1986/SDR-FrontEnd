import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ReportComponent } from '../report/report.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { WorklogComponent } from '../worklog/worklog.component';
import { ProfileComponent } from '../profile/profile.component';
import { ResumeComponent } from '../resume/resume.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { SignupComponent } from '../auth/signup/signup.component';
import {SDRComponent} from "../sdr/sdr.component";
import {AuthGuard} from "../auth/auth.guard";


export const appRoutes: Routes = [
  {path: '', redirectTo: '/SDR/dashboard', pathMatch: 'full'},
  {path: 'signIn', component: SigninComponent},
  {path: 'signUp', component: SignupComponent},
  {path: 'SDR', component: SDRComponent, canActivate: [AuthGuard], children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'toDoList', component: TodoListComponent},
    {path: 'worklog', component: WorklogComponent},
    {path: 'report', component: ReportComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'profile', component: ProfileComponent}
  ]},
  {path: '**', redirectTo: '/SDR/dashboard' }
];



@NgModule ({
  imports: [
    CommonModule,
    RouterModule.forRoot (appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
