import { Car } from '../models/car';

const spark: Car = {
  manufacturer: 'chevrolet',
  modelName: 'spark',
  manufacturedYear: 2010,
  color: 'red',
  hasGas: true,
  isNew: false,
};

const nexia: Car = {
  manufacturer: 'chevrolet',
  modelName: 'nexia',
  manufacturedYear: 2012,
  color: 'blue',
  hasGas: false,
  isNew: false,
};

const malibu: Car = {
  manufacturer: 'chevrolet',
  modelName: 'malibu',
  manufacturedYear: 2015,
  color: 'black',
  hasGas: true,
  isNew: true,
};

export const carList: Array<Car> = [
  spark,
  nexia,
  malibu,
  {
    modelName: 'Captiva',
    manufacturer: 'chevrolet',
    manufacturedYear: 2017,
    color: 'black',
  },
];
