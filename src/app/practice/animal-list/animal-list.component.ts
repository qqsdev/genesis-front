import { Component, OnInit } from '@angular/core';
import { animals } from '../data/animals-data';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {
  public animals = animals;

  constructor() { }

  ngOnInit(): void {
  }

}
