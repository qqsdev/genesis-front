import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'genesis-lazy-content-page',
  templateUrl: './lazy-content-page.component.html',
  styleUrls: ['./lazy-content-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyContentPageComponent<T> {
  @Input() emptyMesasage: string | null = null;
  @Input() emptyTemplate: TemplateRef<any> | null = null;

  @Input() loading: boolean | null = false;
  @Input() loadingTemplate: TemplateRef<any> | null = null;

  @Input() list: Array<T> | null = null;
  @Input() listTemplate: TemplateRef<T> | null = null;
}
