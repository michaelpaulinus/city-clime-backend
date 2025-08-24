import Location from './location';
import Current from './current';

export default interface CurrentWeather {
  location: Location;
  current: Current;
}
