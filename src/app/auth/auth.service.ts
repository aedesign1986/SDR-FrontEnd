import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";

@Injectable ()
export class AuthService {

  public isUserAuthenticated = new Subject<boolean>();
  public user;
  public userData;
  public isUserLogged;
  private userToken;

  constructor ( private afAuth: AngularFireAuth, private router: Router ) {
    this.isUserLogged = false;
    this.user = this.afAuth.authState;
    this.user.subscribe(
        user => {
          console.log('PASSED ON FIREBASE AUTHSTATE TOOL', user);
          // TODO improve Function to ONLY Recover interesting Data
          this.userData = user;
          this.isUserLogged = user !== null;
          if (user) {
            this.isUserAuthenticated.next(true);
          }else {
            this.isUserAuthenticated.next(false);
          }
          console.log('DATA Loaded on userData', this.userData, 'User is Logged on App??', this.isUserLogged);
        }
    );
  }

  signupUser ( email: string, password: string ) {
    this.afAuth.auth.createUserWithEmailAndPassword (email, password)
        .catch (
            error => console.log (error)
        ).then (
        ( response ) => {
          console.log ('Works');
          console.log (response);
          this.userToken = response.refreshToken;
          this.isUserLogged = true;
        }
    );

  }

  signinUser ( email: string, password: string ) {
    this.afAuth.auth.signInWithEmailAndPassword (email, password)
        .catch (
            error => console.log (error)
        )
        .then (
            response => {
              console.log (response);
              this.userToken = response.refreshToken;
              this.isUserLogged = true;
              this.router.navigate(['/SDR','/dashboard']);
            }
        );

  }

  signoutUser () {
    this.afAuth.auth.signOut().then(
      () => this.router.navigate(['/signIn'])
    );
    this.userToken = null;
    this.isUserLogged = false;
  }

  getProfileData () {
    return this.afAuth.authState;
  }

  getUserUid () {
    return this.afAuth.auth.currentUser.uid;
    // return this.userData.uid;
  }

  getUserToken() {
    console.log('User Data', this.userData);
     return this.userToken;
  }

  getUserObservable() {
    return this.afAuth.auth.currentUser;
  }
}
