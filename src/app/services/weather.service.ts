import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'd6147d26e352e187695bd7ca0b0ee695';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `http://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`
   }

   getWeather(cityName: string , countryCode: string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`)
   }

}
