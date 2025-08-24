import { Injectable } from '@nestjs/common';
import axios from 'axios';
import CurrentWeather from 'src/common/dtos/current-weather';
import ForecastWeather from 'src/common/dtos/forecast-weather';

@Injectable()
export class ExternalWeatherApiService {
  private EXTERNAL_WEATHER_API_BASE_URL = process.env.EXTERNAL_WEATHER_API_BASE_URL;
  private EXTERNAL_WEATHER_API_KEY = process.env.EXTERNAL_WEATHER_API_KEY;

  async getCurrentWeather(location: string) {
    const response = await axios.get<CurrentWeather>(
      `${this.EXTERNAL_WEATHER_API_BASE_URL}/current.json`,
      {
        params: {
          q: location,
          key: this.EXTERNAL_WEATHER_API_KEY
        }
      }
    );

    return response.data;
  }

  async getForecastedWeather(location: string) {
    const response = await axios.get<ForecastWeather>(
      `${this.EXTERNAL_WEATHER_API_BASE_URL}/forecast.json`,
      {
        params: {
          q: location,
          key: this.EXTERNAL_WEATHER_API_KEY
        }
      }
    );

    return response.data;
  }
}
