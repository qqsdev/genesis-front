import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoriesTableComponent } from './categories-table/categories-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CategoriesComponent, CategoriesTableComponent],
  imports: [CommonModule, CategoriesRoutingModule, MatTableModule, MatIconModule, MatButtonModule],
})
export class CategoriesModule {}
