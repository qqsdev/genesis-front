import { Component, OnInit } from '@angular/core';
import { Balls } from '../data/ball-data';

@Component({
  selector: 'app-ball-list',
  templateUrl: './ball-list.component.html',
  styleUrls: ['./ball-list.component.scss'],
})
export class BallListComponent implements OnInit {
  public balls = Balls;
  
  constructor() {}

  ngOnInit(): void {}
}
