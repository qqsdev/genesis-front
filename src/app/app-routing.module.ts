import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddformComponent } from './categories/addform/addform.component';
import { CategoriesComponent } from './categories/categories.component';
import { LayoutComponent } from './layout/layout.component';
import { PcListComponent } from './practice/pc-list/pc-list.component';
import { CarListComponent } from './practice/car-list/car-list.component';
import { EmployeeListComponent } from './practice/employee-list/employee-list.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Categories
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/add', component: AddformComponent },
      { path: 'categories/edit/:id', component: AddformComponent },

      // Products
      { path: 'products', component: ProductsComponent },
      
      // Practice
      { path: 'cars', component: CarListComponent },
      { path: 'pcs', component: PcListComponent },
      { path: 'employees', component: EmployeeListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
