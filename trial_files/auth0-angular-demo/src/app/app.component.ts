//import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {} from '@types/googlemaps';
//import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


   name = 'Angular 8';
   lat:any;
   lng:any;
   constructor(private auth: AuthService) {
     if (navigator)
     {
     navigator.geolocation.getCurrentPosition( pos => {
         this.lng = +pos.coords.longitude;
         this.lat = +pos.coords.latitude;
       });
       console.log(this.lng, this.lat);
     }
   }

// //  @ViewChild('gmap') gmapElement: any;
// map: google.maps.Map;
//
// isTracking = false;
//
// currentLat: any;
// currentLong: any;
//
// marker: google.maps.Marker;

  ngOnInit() {
    this.auth.localAuthSetup();

    // var mapProp = {
    // center: new google.maps.LatLng(18.5793, 73.8143),
    // zoom: 15,
    // mapTypeId: google.maps.MapTypeId.ROADMAP
    //   };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

//   findMe() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       this.showPosition(position);
//     });
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// }
//
// showPosition(position) {
//   this.currentLat = position.coords.latitude;
//   this.currentLong = position.coords.longitude;
//
//   let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//   this.map.panTo(location);
//
//   if (!this.marker) {
//     this.marker = new google.maps.Marker({
//       position: location,
//       map: this.map,
//       title: 'Got you!'
//     });
//   }
//   else {
//     this.marker.setPosition(location);
//   }
// }
//
// trackMe() {
//   if (navigator.geolocation) {
//     this.isTracking = true;
//     navigator.geolocation.watchPosition((position) => {
//       this.showTrackingPosition(position);
//     });
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// }
//
// showTrackingPosition(position) {
//   console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
//   this.currentLat = position.coords.latitude;
//   this.currentLong = position.coords.longitude;
//
//   let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//   this.map.panTo(location);
//
//   if (!this.marker) {
//     this.marker = new google.maps.Marker({
//       position: location,
//       map: this.map,
//       title: 'Got you!'
//     });
//   }
//   else {
//     this.marker.setPosition(location);
//   }
// }

}
