import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './index';
import { CategoriesModule } from './categories/categories.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [CoreModule, CategoriesModule]
})
export class ComponentsModule {
}
