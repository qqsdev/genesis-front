import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { AddformComponent } from './categories/addform/addform.component';
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
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
