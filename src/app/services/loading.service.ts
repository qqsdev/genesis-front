import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public isLoading$ = new BehaviorSubject<boolean>(false);

  public startLoading() {
    if (!this.isLoading$.value) {
      this.isLoading$.next(true);
      console.log('loading: ', true);
    }
  }
  public stopLoading() {
    if (this.isLoading$.value) {
      this.isLoading$.next(false);
      console.log('loading: ', false);
    }
  }
}
