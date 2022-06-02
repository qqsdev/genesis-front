import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss'],
})
export class AddformComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    url: new FormControl(),
  });

  constructor(private service: CategoriesService, private router: Router) {}

  ngOnInit(): void {}

  public save() {
    if (this.form.valid) {
      this.service.save(this.form.value);
      this.router.navigate(['/']);
    }
  }
}
