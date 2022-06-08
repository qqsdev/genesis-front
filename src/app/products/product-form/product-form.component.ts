import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'genesis-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  public categories$ = this.categories.categories$;

  public form: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    imageUrl: new FormControl(),
    categoryId: new FormControl(),
  });

  public id: string | null = '';

  constructor(
    private service: ProductsService,
    private categories: CategoriesService,
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
