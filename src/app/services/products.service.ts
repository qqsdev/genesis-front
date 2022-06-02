import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { ApiService } from './api-services/api.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public isLoading$ = new BehaviorSubject<boolean>(false);
  public products$ = new BehaviorSubject<Product[]>([]);

  constructor(private api: ApiService, private loading: LoadingService) {}

  public fetch() {
    this.loading.content$.next(true);
    this.api.products.getAll().subscribe((data) => {
      this.products$.next(data);
      this.loading.content$.next(false);
    });
  }

  public fetchByCategory(categoryId: number) {
    this.loading.content$.next(true);
    this.api.products.getAll().subscribe((data) => {
      this.products$.next(
        data.filter((product: Product) => product.categoryId === categoryId)
      );
      this.loading.content$.next(false);
    });
  }

  public remove(product: Product) {
    if (confirm('Are you sure?')) {
      this.loading.content$.next(true);
      this.api.products.remove(product.id).subscribe((data) => {
        this.products$.next(data);
        this.loading.content$.next(false);
      });
    }
  }

  public save(product: Product) {
    return this.api.products.create(product).subscribe(() => {
      this.fetch();
    });
  }
}
