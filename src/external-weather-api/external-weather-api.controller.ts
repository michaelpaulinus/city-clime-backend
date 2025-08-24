import { Controller, Get, Param } from '@nestjs/common';
import { ExternalWeatherApiService } from './external-weather-api.service';

@Controller('ext-weather')
export class ExternalWeatherApiController {
  constructor(private readonly externalWeatherApiService: ExternalWeatherApiService) {}

  @Get('current/:location')
  async getCurrentWeather(@Param('location') location: string) {
    return this.externalWeatherApiService.getCurrentWeather(location);
  }

  @Get('forecast/:location')
  async getForecastedWeather(@Param('location') location: string) {
    return this.externalWeatherApiService.getForecastedWeather(location);
  }
}
