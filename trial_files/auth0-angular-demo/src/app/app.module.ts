import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { WeatherComponent } from './weather/weather.component';
import { SensorsComponent } from './sensors/sensors.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ApixuService } from "./apixu.service";
//import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CallbackComponent,
    ProfileComponent,
    WeatherComponent,
    SensorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC7FSCh30q-FMZ5J3D4HxqL03Xeut07t9c'
    })



    //AgmCoreModule.forRoot({
      //apiKey: 'AIzaSyC7FSCh30q-FMZ5J3D4HxqL03Xeut07t9c'

  ],

  providers: [ApixuService],
  //declarations: [APPComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
