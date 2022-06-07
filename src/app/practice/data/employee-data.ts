import { Employee } from '../models/employee';

const Alex: Employee = {
  speciality: 'doctor',
  name: 'Alex',
  gender: 'men',
  age: 45,
  experienceYear: 17,
  country: 'Spain',
};

const Samanta: Employee = {
  speciality: 'teacher',
  name: 'Samanta',
  gender: 'women',
  age: 36,
  experienceYear: 8,
};

const Bob: Employee = {
  speciality: 'engineer',
  name: 'Bob',
  gender: 'men',
  age: 54,
  experienceYear: 25,
  country: 'Korea',
};

export const employeeList: Array<Employee> = [
  Alex,
  Samanta,
  Bob,
  {
    speciality: 'builder',
    name: 'Georg',
    gender: 'men',
    age: 48,
    experienceYear: 23,
  },
];
