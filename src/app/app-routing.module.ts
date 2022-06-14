import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// shared components
import { LayoutComponent } from './shared/layout/layout.component';

// features
import { AddformComponent } from './features/categories/addform/addform.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { BasketComponent } from './features/basket/basket.component';
import { ProductsComponent } from './features/products/products.component';

// Practise, ertaga ochiriladi
import { EmployeeListComponent } from './practice/employee-list/employee-list.component';
import { AnimalListComponent } from './practice/animal-list/animal-list.component';
import { BallListComponent } from './practice/ball-list/ball-list.component';
import { PcListComponent } from './practice/pc-list/pc-list.component';
import { CarListComponent } from './practice/car-list/car-list.component';

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

      // Basket
      { path: 'basket', component: BasketComponent },

      // Practice
      { path: 'cars', component: CarListComponent },
      { path: 'pcs', component: PcListComponent },
      { path: 'employees', component: EmployeeListComponent },
      { path: 'animals', component: AnimalListComponent },
      { path: 'balls', component: BallListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
