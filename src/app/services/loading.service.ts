import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  public header$ = new BehaviorSubject<boolean>(false);
  public content$ = new BehaviorSubject<boolean>(false);
  public navigation$ = new BehaviorSubject<boolean>(false);
}
