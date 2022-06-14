import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  public isLoading$ = this.loading.isLoading$;

  constructor(private loading: LoadingService) {}

  ngOnInit(): void {}
}
