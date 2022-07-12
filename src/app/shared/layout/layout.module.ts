import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SearchModule } from '../search/search.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    RouterModule,
    SearchModule,
    CommonModule,

    MatToolbarModule,
    MatProgressBarModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
