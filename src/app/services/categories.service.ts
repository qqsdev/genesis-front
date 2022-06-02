import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../models/category';
import { ApiService } from './api-services/api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public categories$: BehaviorSubject<Category[]> = new BehaviorSubject<
    Category[]
  >([]);

  constructor(private api: ApiService) {}

  public fetch() {
    this.isLoading$.next(true);
    this.api.categories.getAll().subscribe((data) => {
      this.categories$.next(data);
      this.isLoading$.next(false);
    });
  }

  public remove(category: Category) {
    if (confirm('Are you sure?')) {
      this.isLoading$.next(true);
      this.api.categories.remove(category.id).subscribe((data) => {
        this.categories$.next(data);
        this.isLoading$.next(false);
      });
    }
  }

  public save(category: Category) {
    return this.api.categories.create(category).subscribe(() => {
      this.fetch();
    });
  }
}
