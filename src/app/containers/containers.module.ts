import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitComponent } from './submit/submit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { SubmitModule } from '../components';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    SubmitModule,
    MatCardModule
  ],
  declarations: [SubmitComponent, PageNotFoundComponent, HeaderComponent],
  exports: [SubmitComponent, PageNotFoundComponent, HeaderComponent]
})
export class ContainersModule {
}
