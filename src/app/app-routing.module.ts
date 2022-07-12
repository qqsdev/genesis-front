import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// shared components
import { LayoutComponent } from './shared/layout/layout.component';

// features
import { AddformComponent } from './features/categories/addform/addform.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { BasketComponent } from './features/basket/basket.component';
import { ProductsComponent } from './features/products/products.component';
import { AuthComponent } from './features/auth/auth.component';
import { SearchResultsComponent } from './features/search-results/search-results.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { ProductPageComponent } from './features/products/product-page/product-page.component';

// TODO: добавить routing для одного продукта

const routes: Routes = [
  // Auth
  { path: 'auth', component: AuthComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      // Home-page
      { path: '', component: HomePageComponent },

      // Categories
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/add', component: AddformComponent },
      { path: 'categories/edit/:id', component: AddformComponent },

      // Products
      { path: 'products', component: ProductsComponent },

      // Product page
      { path: 'product-page', component: ProductPageComponent },

      // Basket
      { path: 'basket', component: BasketComponent },

      // Search-results
      { path: 'search-results', component: SearchResultsComponent },

      // admin
      { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
