import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.api + '/categories';

@Injectable({ providedIn: 'root' })
export class CategoriesApiService {
  constructor(private http: HttpClient) {}

  /**
   * Fetches all categories from storage
   * @returns categories from storage
   */
  public getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(BASE_URL);
  }

  /**
   * Fetches one category from storage
   * @param id identificator of category
   * @returns category from storage
   */
  public get(id: number): Observable<Category> {
    return this.http.get<Category>(BASE_URL, { params: { id } });
  }

  /**
   * Saving new category into storage
   * @param payload
   * @returns updated list
   */
  public create(payload: any): Observable<Category[]> {
    return this.http.post<Category[]>(BASE_URL, payload);
  }

  /**
   * Updates one category by id
   * @param id identificator of category
   * @param changedCategory
   * @returns updated category or null
   */
  public update(id: number, payload: Category): Observable<Category[]> {
    return this.http.put<Category[]>(BASE_URL, payload);
  }

  /**
   * Removes one category by id
   * @param id identificator of category
   * @returns updated list or old list
   */
  public remove(id: number): Observable<Category[]> {
    return this.http.delete<Category[]>(BASE_URL, { params: { id } });
  }
}
