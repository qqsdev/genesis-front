import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';

// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// shared
import { LayoutComponent } from './shared/layout/layout.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { SearchComponent } from './shared/search/search.component';

// features
import { CategoriesComponent } from './features/categories/categories.component';
import { ProductsComponent } from './features/products/products.component';
import { AddformComponent } from './features/categories/addform/addform.component';
import { BasketComponent } from './features/basket/basket.component';

// practice
import { CarListComponent } from './practice/car-list/car-list.component';
import { EmployeeListComponent } from './practice/employee-list/employee-list.component';
import { PcListComponent } from './practice/pc-list/pc-list.component';
import { AnimalListComponent } from './practice/animal-list/animal-list.component';
import { BallListComponent } from './practice/ball-list/ball-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideNavComponent,
    CategoriesComponent,
    ProductsComponent,
    AddformComponent,
    SearchComponent,
    BasketComponent,

    // practise
    CarListComponent,
    EmployeeListComponent,
    PcListComponent,
    AnimalListComponent,
    BallListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
