import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubmitModule} from './submit/submit.module';
import {CoreModule} from './core/core.module';
import {ProductModule} from './product/product.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [SubmitModule, CoreModule, ProductModule]
})
export class ComponentsModule {
}
