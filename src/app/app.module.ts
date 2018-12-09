import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { ViajeService } from './services/viaje.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViajeComponent } from './components/viaje/viaje.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { AddViajeComponent } from './components/add-viaje/add-viaje.component';

import { NgxSpinnerModule } from 'ngx-spinner';
  const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'addViaje', component: AddViajeComponent, canActivate: [AuthGuard]},
    {path: 'viaje', component: ViajeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: '**', component: LoginComponent}
  ];
@NgModule({
  exports: [RouterModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    ViajeComponent,
    LoginComponent,
    RegisterComponent,
    AddViajeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Mi proyecto'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [ViajeService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
