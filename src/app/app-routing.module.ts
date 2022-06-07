import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddformComponent } from './categories/addform/addform.component';
import { CategoriesComponent } from './categories/categories.component';
import { LayoutComponent } from './layout/layout.component';
import { PcListComponent } from './practice/pc-list/pc-list.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CategoriesComponent,
      },
      { path: 'categories/add:id', component: AddformComponent },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'pcs',
        component: PcListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
