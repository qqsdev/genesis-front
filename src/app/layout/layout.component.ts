import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(public loading: LoadingService) {}

  public clearLocalStorage() {
    localStorage.clear();
    location.reload();
  }
}
