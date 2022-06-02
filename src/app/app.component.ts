import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CategoriesService } from './services/categories.service';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'GENESIS';

  constructor(
    private router: Router,
    private loading: LoadingService,
    private categories: CategoriesService
  ) {}

  public ngOnInit() {
    this.categories.fetch();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading.navigation$.next(true);
      } else {
        this.loading.navigation$.next(false);
      }
    });
  }
}
