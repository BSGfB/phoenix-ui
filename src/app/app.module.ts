import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainersModule } from './containers/containers.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, PageNotFoundComponent, ProfileComponent, SubmitComponent } from './containers';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadService, AuthService, AuthGuardService } from './service';
import { CoreModule } from './components';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'submit', component: SubmitComponent, canActivate: [AuthGuardService]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'profile'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes/*,
      {enableTracing: true} // <-- debugging purposes only*/
    ),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ContainersModule,
    CoreModule
  ],
  providers: [FileUploadService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
