import { Injectable } from '@angular/core';
import { employeeList } from '../data/employee-data';
import { Employee } from '../models/employee';

@Injectable({ providedIn: 'root' })
export class EmployeeListService {
  public employees: Employee[] = employeeList;
}
