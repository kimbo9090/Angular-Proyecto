import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private AuthService: AuthService) { }
  public email: string = '';
  public pass: string = '';
  ngOnInit() {
  }
onLogin(): void {
  this.AuthService.loginEmailUser(this.email, this.pass)
  .then ((res) => {
    this.router.navigate(['addViaje']);
  }).catch( err => console.log('err', err.message));
}

onLoginGoogle() {
  this.AuthService.onLoginGoogle()
  .then((res) => {
    console.log('resUser', res);
    this.router.navigate(['addViaje']);
  } ).catch(err => console.log('err', err.message));
}
onLogout() {
  this.afAuth.auth.signOut();
  this.router.navigate(['login']);
}

}
