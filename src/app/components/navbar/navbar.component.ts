import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private AuthService: AuthService, private afsAuth: AngularFireAuth, private router: Router) { }
  public isLogged: boolean = false;
  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.AuthService.isAuth().subscribe( auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
      } else {
        console.log('Not user logged');
        this.isLogged = false;
      }
    });
  }
  redirectLogin() {
    this.router.navigate(['login']);
  }
  redirectRegister() {
    this.router.navigate(['register']);
  }
  onLogout() {
    this.afsAuth.auth.signOut();
    this.router.navigate(['login']);

  }
}
