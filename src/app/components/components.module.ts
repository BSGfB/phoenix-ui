import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitModule } from './submit/submit.module';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubmitModule, CoreModule],
  exports: [SubmitModule, CoreModule]
})
export class ComponentsModule {
}
