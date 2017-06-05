import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ReportComponent } from '../report/report.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { WorklogComponent } from '../worklog/worklog.component';
import { ProfileComponent } from '../profile/profile.component';
import { ResumeComponent } from '../resume/resume.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todoList', component: TodoListComponent },
  { path: 'report', children: [
    {path: '', component: ReportComponent }
    // {path: ':id', component: },
    // {path: ':id/edit', component: },
    // {path: ':new', component: }
  ]},
  { path: 'workLog', component: WorklogComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'resume', component:  ResumeComponent},
  { path: '**', redirectTo: '/dashboard'}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
