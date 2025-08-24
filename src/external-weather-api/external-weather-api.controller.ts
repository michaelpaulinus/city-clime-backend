import { Controller, Get, Param } from '@nestjs/common';
import { ExternalWeatherApiService } from './external-weather-api.service';

@Controller('external-weather-api')
export class ExternalWeatherApiController {
  constructor(private readonly externalWeatherApiService: ExternalWeatherApiService) {}

  @Get('current-weather/:location')
  async getCurrentWeather(@Param('location') location: string) {
    return this.externalWeatherApiService.getCurrentWeather(location);
  }

  @Get('forecasted-weather/:location')
  async getForecastedWeather(@Param('location') location: string) {
    return this.externalWeatherApiService.getForecastedWeather(location);
  }
}
