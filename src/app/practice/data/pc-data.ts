import { PC } from '../models/pc';

const AMD: PC = {
  manufacturer: 'AMD ',
  modelName: 'Office standart ',
  year: 2021,
  processor: '3.4 GHz, 2 cores/4 threads',
  ram: '8gb',
  powerSupply: 'Power supply 450w Avtech ATX',
  motherboard: 'BIOSTAR | A320MH | AM4 | DDR4 x2',
  hardDrive: 'SSD HIKVISION C100 120GB',
};

const Intel: PC = {
  manufacturer: 'Intel ',
  modelName: 'Office standart ',
  year: 2021,
  processor: ' Intel Pentium Gold G6400, 4,00 GHz',
  ram: '8gb',
  powerSupply: 'Avtech 450W',
  motherboard: 'MSI | H510M-A PRO | LGA 1200',
  hardDrive: 'M.2 HIKVISION E100N 128GB',
};

const MSI: PC = {
  manufacturer: 'Intel ',
  modelName: 'Office Lite+ ',
  year: 2021,
  processor: ' Intel-Core i3 — 10100, 3.6 GHz LGA1200',
  ram: '8gb',
  powerSupply: 'Avtech 450W',
  motherboard: 'MSI | H510M-A PRO | LGA 1200',
  hardDrive: 'M.2 HIKVISION E100N 128GB',
};

export const PCList: Array<PC> = [AMD, Intel, MSI];
