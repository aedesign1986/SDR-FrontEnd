import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public isUserLogged: boolean;

  constructor(private authService: AuthService) {
    this.isUserLogged = false;
  }


  ngOnInit() {
    this.authService.user.subscribe(
        user => {
          if (user !== null) {
            this.isUserLogged = true;
          }else {
            this.isUserLogged = false;
          }
        }
    );
  }
}
