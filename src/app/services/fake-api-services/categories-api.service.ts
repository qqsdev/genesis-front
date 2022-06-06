import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FAKE_CATEGORIES } from 'src/app/data/fake-categories';
import { FakeDataService } from 'src/app/data/fake-data';

const KEY = 'CATEGORIES';

// 1000 va 3000 orasidagi qaysidur sonni qaytaradi
const randomMilliseconds = (min = 100, max = 2000) => {
  return min + Math.random() * (max - min);
};

const rerurnWithDelay = (data: any) =>
  of(data).pipe(delay(randomMilliseconds()));

@Injectable({
  providedIn: 'root',
})
export class CategoriesApiService {
  constructor(private fakeDataService: FakeDataService) {}

  /**
   * Fetches all categories from storage
   * @returns categories from storage
   */
  public getAll() {
    const categories = this.fakeDataService.getList(KEY, FAKE_CATEGORIES);

    return rerurnWithDelay(categories);
  }

  /**
   * Fetches one category from storage
   * @param id identificator of category
   * @returns category from storage
   */
  public get(id: number) {
    const categories = this.fakeDataService.getList(KEY, FAKE_CATEGORIES);

    const category = categories.find((c: any) => c.id === id);

    return rerurnWithDelay(category);
  }

  /**
   * Saving new category into storage
   * @param newCategory
   * @returns updated list
   */
  public create(newCategory: any) {
    const categories = this.fakeDataService.getList(KEY, FAKE_CATEGORIES);

    categories.push(newCategory);

    this.fakeDataService.saveList(KEY, categories);

    return rerurnWithDelay(categories);
  }

  /**
   * Updates one category by id
   * @param id identificator of category
   * @param changedCategory
   * @returns updated category or null
   */
  public update(id: number, changedCategory: any) {
    const categories = this.fakeDataService.getList(KEY, FAKE_CATEGORIES);

    const oldCategory = categories.find((c: any) => c.id === id);

    if (oldCategory) {
      const index = categories.findIndex((c) => c === oldCategory);

      const updatedCategory = { ...oldCategory, ...changedCategory };

      categories[index] = updatedCategory;

      this.fakeDataService.saveList(KEY, categories);

      return rerurnWithDelay(updatedCategory);
    }

    return rerurnWithDelay(null);
  }

  /**
   * Removes one category by id
   * @param id identificator of category
   * @returns updated list or old list
   */
  public remove(id: number): Observable<any[]> {
    const categories = this.fakeDataService.getList(KEY, FAKE_CATEGORIES);

    const category = categories.find((c: any) => c.id === id);

    if (category) {
      const updatetCategories = categories.filter((c) => c !== category);

      this.fakeDataService.saveList(KEY, updatetCategories);

      return rerurnWithDelay(updatetCategories);
    }

    return rerurnWithDelay(categories);
  }
}
