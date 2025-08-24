import { Controller, Get, Param, Put } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
@Controller('weather')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Get('forecast')
  async getForecastedWeather() {
    return await this.firebaseService.getForecastedWeather();
  }

  @Put('forecast/:location')
  async addForecastedWeather(@Param('location') location: string) {
    await this.firebaseService.addForecastedWeather(location);
  }
}
