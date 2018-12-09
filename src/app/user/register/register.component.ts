import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private AuthService: AuthService) { }
  public email: string = '';
  public pass: string = '';
  ngOnInit() {
  }
  onAddUser() {
    this.AuthService.registerUser(this.email, this.pass)
    .then((res) => {
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
}
