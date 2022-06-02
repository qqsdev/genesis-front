import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss'],
})
export class AddformComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    id: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}
}
