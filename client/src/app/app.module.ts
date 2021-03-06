import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { SecretComponent } from './secret/secret.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { JobsComponent } from './components/jobs/jobs.component';
import { HomeNavComponent } from './components/home-nav/home-nav.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatsComponent } from './components/stats/stats.component';
import { LandingComponent } from './components/landing/landing.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TrackedJobsComponent } from './components/tracked-jobs/tracked-jobs.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecretComponent,
    JobsComponent,
    HomeNavComponent,
    SettingsComponent,
    PageNotFoundComponent,
    FooterComponent,
    StatsComponent,
    LandingComponent,
    LandingPageComponent,
    TrackedJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
