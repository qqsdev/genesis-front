import { Animal } from '../models/animal';

// objects
// 2

const cat: Animal = {
  name: 'qoravoy',
  age: 3,
  color: 'black',
  voice: 'meow',
  type: 'cat',
};

const dog: Animal = {
  name: 'jack',
  age: 4,
  color: 'black',
  type: 'dog',
};

export const animals: Animal[] = [
  cat,
  dog,
  {
    name: 'steve',
    age: 10,
    voice: 'makak',
    type: 'monkey',
  },
];
