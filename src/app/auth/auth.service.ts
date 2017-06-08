import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable ()
export class AuthService {

  public user;
  private userData;

  constructor ( private afAuth: AngularFireAuth ) {
    this.user = this.afAuth.authState;
    this.user.subscribe(
        user => {
          // TODO improve Function to ONLY Recover interesting Data
          this.userData = user;
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
        }
    );

  }

  signinUser ( email: string, password: string ) {
    this.afAuth.auth.signInWithEmailAndPassword (email, password)
        .catch (
            error => console.log (error)
        )
        .then (
            response => console.log (response)
        );

  }

  signoutUser () {
    this.afAuth.auth.signOut ();
  }

  getProfileData () {
    return this.userData.email;
  }

  getUserUid () {
    return this.userData.uid;
  }
}
