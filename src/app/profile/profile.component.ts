import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(
        user => {
          this.user = user;
        }
    );
  }

  getProfile() {
    console.log(this.user);
  }

}
