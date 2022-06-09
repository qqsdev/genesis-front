import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
          this.form.patchValue(data);
        });
      }
    });
  }

  public save() {
    if (this.form.valid) {
      if (this.id) {
        this.service.update(+this.id, this.form.value);
      } else {
        this.service.save(this.form.value);
      }
      this.router.navigate(['/']);
    }
  }
}
