import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [MatIconModule, MatButtonModule, MatInputModule],
  exports: [SearchComponent]
})
export class SearchModule {}