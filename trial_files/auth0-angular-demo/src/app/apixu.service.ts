import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location){
      return this.http.get(
        //  'https://api.apixu.com/v1/current.json?key=64eeeb3d82159f91adabebafaf75b5dc&query&q=' + location
        'http://api.weatherstack.com/current?access_key=64eeeb3d82159f91adabebafaf75b5dc&query=' + location
      );
    }
    //getCurrentPosition
}
