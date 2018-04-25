import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainersModule } from './containers/containers.module';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent, SubmitComponent } from './containers';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadService } from './service/file-upload.service';


const appRoutes: Routes = [
  {path: 'submit', component: SubmitComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ContainersModule
  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
