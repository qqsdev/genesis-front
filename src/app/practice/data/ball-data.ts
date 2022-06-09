import { Ball } from '../models/ball';

const Basketball: Ball = {
  name: 'Basketball',
  color: 'black',
  type: 'ball',
  shape: 'round',
};

const Rugbyball: Ball = {
  name: 'Rugbyball',
  color: 'black',
  type: 'ball',
  shape: 'egg',
};

export const Balls: Ball[] = [
  Basketball,
  Rugbyball,
  {
    name: 'Volleyball',
    color: 'yellow',
    type: 'ball',
    shape: 'round',
  },
];
