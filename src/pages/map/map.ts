import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

import { ICustomer } from '../../models/customer';


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: GoogleMap;
  mapElement: HTMLElement;
  customer: ICustomer;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public googleMaps: GoogleMaps,
    public geolocation: Geolocation
  ) {
    this.customer = this.navParams.get('customer');
  }

  ionViewDidLoad() {
    this.loadMap();
    console.log('ionViewDidLoad MapPage');
  }

  loadMap() {

    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
      this.mapElement = document.getElementById('map');

      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: this.customer.lat,
            lng: this.customer.lng,
          },
          zoom: 18,
          tilt: 30
        },
        controls: {
          'compass': true,
          'zoom': true,
          'myLocationButton': true,
        },
        gestures: {
          'scroll': true,
          'tilt': true,
          'zoom': true
        },
      };

      this.map = new GoogleMap(this.mapElement, mapOptions);
      this.map.one(GoogleMapsEvent.MAP_READY)
        .then(() => {
          /*
          this.map.addMarker({
            title: 'Your location',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: resp.coords.latitude,
              lng: resp.coords.longitude
            }
          });
          */

          this.map.addMarker({
            title: this.customer.name,
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: this.customer.lat,
              lng: this.customer.lng
            }
          });
        });
    });
  }
}
