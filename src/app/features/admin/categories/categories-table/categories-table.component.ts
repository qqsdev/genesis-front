import { Component, OnInit } from '@angular/core';
import { collectionData, collection, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.scss'],
})
export class CategoriesTableComponent implements OnInit {
  public displayedColumns: string[] = ['index', 'imageUrl', 'name', 'actions'];
  public dataSource$: Observable<any[]>;

  constructor(firestore: Firestore) {
    const categories = collection(firestore, 'categories');
    this.dataSource$ = collectionData(categories, { idField: 'uid' });
  }

  ngOnInit(): void {}
}
