import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent implements OnInit {
  public isLoading$: BehaviorSubject<boolean> = this.service.isLoading$;
  public categories$: BehaviorSubject<Category[]> = this.service.categories$;

  constructor(private service: CategoriesService) {}

  public ngOnInit(): void {
    this.service.fetch();
  }

  public remove(category: Category) {
    this.service.remove(category);
  }
}
