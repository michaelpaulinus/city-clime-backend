import Location from './location';
import Current from './current';
import ForecastDay from './forecast-day';

export default interface ForecastWeather {
  location: Location;
  current: Current;
  forecast: {
    forecastday: ForecastDay[];
  };
}
