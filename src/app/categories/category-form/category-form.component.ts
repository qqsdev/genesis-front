import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    url: new FormControl(),
  });

  public id: string | null = '';

  constructor(
    private service: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.service.get(+this.id).subscribe((data) => {
          console.log(data);
          this.form.patchValue(data);
        });
      }
    });
  }

  public save(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      this.id
        ? this.service.update(this.form.value)
        : this.service.create(this.form.value);
      this.router.navigate(['/']);
    }

    return false;
  }
}
