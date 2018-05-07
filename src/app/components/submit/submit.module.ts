import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  SubmitAboutComponent,
  SubmitDescriptionComponent,
  SubmitLocationComponent,
  SubmitPhotosComponent,
  SubmitSubmitComponent
} from './index';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SubmitDescriptionComponent,
    SubmitLocationComponent,
    SubmitAboutComponent,
    SubmitSubmitComponent,
    SubmitPhotosComponent
  ],
  exports: [
    SubmitDescriptionComponent,
    SubmitLocationComponent,
    SubmitAboutComponent,
    SubmitSubmitComponent,
    SubmitPhotosComponent
  ]
})
export class SubmitModule {
}
