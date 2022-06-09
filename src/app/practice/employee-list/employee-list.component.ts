import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeListService } from './employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  public employees: Employee[] = this.servise.employees;

  constructor(private servise: EmployeeListService) {}
}
