import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../models/category';
import { ApiService } from './api-services/api.service';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  public isLoading$ = new BehaviorSubject<boolean>(false);
  public categories$ = new BehaviorSubject<Category[]>([]);

  constructor(private api: ApiService) {}

  public fetch() {
    this.isLoading$.next(true);
    this.api.categories.getAll().subscribe((data) => {
      this.categories$.next(data);
      this.isLoading$.next(false);
    });
  }

  public get(id: number) {
    return this.api.categories.get(id);
  }

  public create(category: Category) {
    this.isLoading$.next(true);
    return this.api.categories.create(category).subscribe((data) => {
      this.categories$.next(data);
      this.isLoading$.next(false);
    });
  }

  public update(category: Category) {
    this.isLoading$.next(true);
    return this.api.categories.update(category).subscribe((data) => {
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
}
