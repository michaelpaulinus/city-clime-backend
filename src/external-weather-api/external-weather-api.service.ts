import { Injectable } from '@nestjs/common';
import axios from 'axios';
import CurrentWeather from 'src/common/dtos/current-weather';
import ForecastWeather from 'src/common/dtos/forecast-weather';

@Injectable()
export class ExternalWeatherApiService {
  private EXTERNAL_WEATHER_API_BASE_URL = process.env.EXTERNAL_WEATHER_API_BASE_URL;

  async getCurrentWeather(location: string) {
    return axios.get<CurrentWeather>(
      `${this.EXTERNAL_WEATHER_API_BASE_URL}/api/weather/current/${location}`
    );
  }

  async getForecastedWeather(location: string) {
    return axios.get<ForecastWeather>(
      `${this.EXTERNAL_WEATHER_API_BASE_URL}/api/weather/forecast/${location}`
    );
  }
}
