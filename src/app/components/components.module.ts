import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitModule } from './submit/submit.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubmitModule],
  exports: [SubmitModule]
})
export class ComponentsModule {
}
