import { Component, OnInit } from '@angular/core';
import { PC } from '../models/pc';
import { PCListService } from './pc-list.service';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.scss'],
})
export class PcListComponent {
  public PC: PC[] = this.service.pcs;

  constructor(private service: PCListService) {}
}
