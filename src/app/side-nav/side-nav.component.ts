import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  public categories$ = this.categoriesService.categories$;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {}
}
