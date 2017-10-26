import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductDetailPage } from '../product-detail/product-detail';

import { IProduct } from '../../models/product';

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  products: Array<IProduct> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.products.push({ id: 1, code: 'K19-04', name: 'Normal Polo', stock: 5, price: 200.00, image: './assets/images/product1.jpg' });
    this.products.push({ id: 2, code: 'K19-03', name: 'Shirt Apologue', stock: 10, price: 100.00, image: './assets/images/product2.jpg' });
    this.products.push({ id: 3, code: 'K19-02', name: 'Sport Polo', stock: 4, price: 150.00, image: './assets/images/product3.jpg' });
    this.products.push({ id: 4, code: 'NEPX-0007IX02', name: 'Black Normal Polo', price: 150.00, stock: 8, image: './assets/images/product4.jpg' });
    this.products.push({ id: 5, code: 'NUKEW-0005', name: 'Red Short Polo', stock: 3, price: 170.00, image: './assets/images/product5.jpg' });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

  viewProductDetail(product) {
    this.navCtrl.push(ProductDetailPage, { 'product': product });
  }

}
