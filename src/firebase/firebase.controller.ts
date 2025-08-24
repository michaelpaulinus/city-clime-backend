import { Controller, Get, Param, Put } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
@Controller('firebase')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Put('/forecasted-weather/:location')
  async addForecastedWeather(@Param('location') location: string) {
    await this.firebaseService.addForecastedWeather(location);
  }

  @Get('/forecasted-weather')
  async getForecastedWeather() {
    return await this.firebaseService.getForecastedWeather();
  }
}
