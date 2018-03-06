import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule
  ],
  declarations: [CategoryComponent],
  exports: [CategoryComponent]
})
export class CategoriesModule {
}
