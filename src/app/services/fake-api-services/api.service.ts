import { Injectable } from '@angular/core';
import { CategoriesApiService } from './categories-api.service';
import { ProductsApiService } from './products-api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    public products: ProductsApiService,
    public categories: CategoriesApiService
  ) {}
}
