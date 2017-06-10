import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable ()
export class AuthService {

  public user;
  private userData;
  public isUserLogged;

  constructor ( private afAuth: AngularFireAuth ) {
    this.isUserLogged = false;
    this.user = this.afAuth.authState;
    this.user.subscribe(
        user => {
          // TODO improve Function to ONLY Recover interesting Data
          this.userData = user;
          this.isUserLogged = user !== null;
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
              this.isUserLogged = true;
            }
        );

  }

  signoutUser () {
    this.afAuth.auth.signOut ();
    this.isUserLogged = false;
  }

  getProfileData () {
    return this.userData;
  }

  getUserUid () {
    return this.afAuth.auth.currentUser.uid;
    // return this.userData.uid;
  }
}
