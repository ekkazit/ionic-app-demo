import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CallNumber } from '@ionic-native/call-number';
import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { CustomerListPage } from '../pages/customer-list/customer-list';
import { CustomerDetailPage } from '../pages/customer-detail/customer-detail';
import { ProductListPage } from '../pages/product-list/product-list';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { MapPage } from '../pages/map/map';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { BarcodePage } from '../pages/barcode/barcode';
import { ChartPage } from '../pages/chart/chart';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CustomerListPage,
    CustomerDetailPage,
    ProductListPage,
    ProductDetailPage,
    MapPage,
    QrcodePage,
    BarcodePage,
    ChartPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CustomerListPage,
    CustomerDetailPage,
    ProductListPage,
    ProductDetailPage,
    MapPage,
    QrcodePage,
    BarcodePage,
    ChartPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    Camera,
    GoogleMaps,
    Geolocation,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
