import react from 'react';
import {Image} from 'react-native';
import car from './bus.png';

type name = {};
const name = {
  car: car,
  bus: '',
  scooter: '',
  bike: '',
  train: '',
  taxi: '',
};
const Icon = () => <Image source={require(car)} />;
export default Icon;
