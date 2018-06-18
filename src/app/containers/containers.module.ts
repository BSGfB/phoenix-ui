import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { SubmitModule, CoreModule, ProductModule } from '../components';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SubmitComponent, PageNotFoundComponent, LoginComponent, RegistrationComponent, ProfileComponent } from './index';
import { MatSelectModule } from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    SubmitModule,
    CoreModule,
    ProductModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  declarations: [SubmitComponent, PageNotFoundComponent, LoginComponent, RegistrationComponent, ProfileComponent],
  exports: [SubmitComponent, PageNotFoundComponent, LoginComponent]
})
export class ContainersModule {
}
