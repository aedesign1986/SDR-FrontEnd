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


export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    data: {
      menu: false
    }
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      menu:true,
      title: 'DashBoard'
    }
  }, {
    path: 'todoList',
    component: TodoListComponent,
    data: {
      menu: true,
      title: 'Todo List'
    }
  }, {
    path: 'report',
    data: {
      menu: true,
      title: 'Report'
    },
    children: [ {
      path: '', component: ReportComponent
    }
      // {path: ':id', component: },
      // {path: ':id/edit', component: },
      // {path: ':new', component: }
    ]
  }, {
    path: 'workLog',
    component: WorklogComponent,
    data: {
      menu: true,
      title: 'Work Log'
    }
  }, {
    path: 'resume',
    component: ResumeComponent,
    data: {
      menu: true,
      title: 'Resume'
    }
  }, {
    path: 'profile',
    component: ProfileComponent,
    data: {
      menu: true,
      title: 'Profile'
    }
  }, {
    path: 'signin',
    component: SigninComponent,
    data: {
      menu: true,
      title: 'SignIn'
    }
  }, {
    path: 'signup',
    component: SignupComponent,
    data: {
      menu: true,
      title: 'SignUp'
    }
  }, {
    path: '**',
    redirectTo: '/dashboard',
    data: {
      menu: false
    }
  } ];


@NgModule ({
  imports: [
    CommonModule,
    RouterModule.forRoot (appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
