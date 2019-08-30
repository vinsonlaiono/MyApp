import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecretComponent } from './secret/secret.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { SecretGaurdService } from './guards/secret-gaurd.service';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: 'secret', canActivate: [SecretGaurdService], children: [
    { path: 'home', component: SecretComponent }
  ] }
  // { path: 'secret', component: SecretComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
