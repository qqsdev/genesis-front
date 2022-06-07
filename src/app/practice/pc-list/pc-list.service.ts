import { Injectable } from '@angular/core';
import { PCList } from '../data/pc-data';
import { PC } from '../models/pc';

@Injectable({ providedIn: 'root' })
export class PCListService {
  public pcs: PC[] = PCList;
}
