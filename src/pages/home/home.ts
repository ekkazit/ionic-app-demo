import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductListPage } from '../product-list/product-list';
import { CustomerListPage } from '../customer-list/customer-list';
import { QrcodePage } from '../qrcode/qrcode';
import { BarcodePage } from '../barcode/barcode';
import { ChartPage } from '../chart/chart';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  gotoProductPage() {
    this.navCtrl.push(ProductListPage);
  }

  gotoCustomerPage() {
    this.navCtrl.push(CustomerListPage);
  }

  gotoShippingPage() { }

  gotoQRCode() {
    this.navCtrl.push(QrcodePage);
  }

  gotoBarCode() {
    this.navCtrl.push(BarcodePage);
  }

  gotoChartPage() {
    this.navCtrl.push(ChartPage);
  }

  doLogout() {
    console.log('You have logged out!');
  }

}
