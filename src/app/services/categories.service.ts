import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category } from '../models/category';
import { ApiService } from './api-services/api.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  public isLoading$ = new BehaviorSubject<boolean>(false);
  public categories$ = new BehaviorSubject<Category[]>([]);

  constructor(private api: ApiService, private loading: LoadingService) {}

  public fetch() {
    this.loading.startLoading();

    this.api.categories.getAll().subscribe((data) => {
      this.categories$.next(data);
      this.loading.stopLoading();
    });
  }

  public remove(category: Category) {
    if (confirm('Are you sure?')) {
      this.loading.startLoading();

      this.api.categories.remove(category.id).subscribe((data) => {
        this.categories$.next(data);
        this.loading.stopLoading();
      });
    }
  }

  public save(category: Category) {
    return this.api.categories.create(category).subscribe(() => {
      this.fetch();
    });
  }
  
  public update(id: number, category: Category) {
    return this.api.categories.update(id, category);
  }

  public get(id: number) {
    this.loading.startLoading();

    return this.api.categories
      .get(id)
      .pipe(tap(() => this.loading.stopLoading()));
  }
}
