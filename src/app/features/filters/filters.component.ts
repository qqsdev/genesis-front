import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  toppings = this._formBuilder.group({
    Dell: false,
    Asus: false,
    Lenovo: false,
    Acer: false,
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
