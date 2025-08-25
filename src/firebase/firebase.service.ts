import { Injectable } from '@nestjs/common';
import { doc, setDoc, getDocs, query, collection, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import ForecastWeather from 'src/common/dtos/forecast-weather';
import { ExternalWeatherApiService } from 'src/external-weather-api/external-weather-api.service';
import cities from 'src/data/cities';

@Injectable()
export class FirebaseService {
  private firestoreDb;

  constructor(private externalWeatherApiService: ExternalWeatherApiService) {
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
    };

    const firebaseClient = initializeApp(firebaseConfig);

    this.firestoreDb = getFirestore(firebaseClient);
  }

  async addForecastedWeather(location: string) {
    const forecastedWeather = await this.externalWeatherApiService.getForecastedWeather(location);

    const citiesRef = collection(this.firestoreDb, 'forecast');

    const cityDocRef = doc(citiesRef, location);

    await setDoc(cityDocRef, forecastedWeather);
  }

  async getForecastedWeather() {
    const q = query(collection(this.firestoreDb, 'forecast'));

    const querySnapshot = await getDocs(q);

    const forecastedWeather = querySnapshot.docs.map(doc => doc.data() as ForecastWeather);

    return forecastedWeather;
  }

  async updateForecastsForAllCities() {
    await Promise.all(cities.map(city => this.addForecastedWeather(city)));
  }
}
