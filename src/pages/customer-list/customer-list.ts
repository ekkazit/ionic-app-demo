import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

import { CustomerDetailPage } from '../customer-detail/customer-detail';
import { MapPage } from '../map/map';

import { ICustomer } from '../../models/customer';


@IonicPage()
@Component({
  selector: 'page-customer-list',
  templateUrl: 'customer-list.html',
})
export class CustomerListPage {

  customers: Array<ICustomer> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public callNumber: CallNumber
  ) {
    this.customers.push({ id: 1, name: 'Supakpong Jinarat', email: 'supakpong@mail.com', phone: '098-1198875', image: './assets/images/cust01.jpg', lat: 13.8860336, lng: 100.5109927 });
    this.customers.push({ id: 2, name: 'Nunaphat Benchamas', email: 'nunaphat@mail.com', phone: '098-9987765', image: './assets/images/cust02.png', lat: 13.8687975, lng: 100.5309588 });
    this.customers.push({ id: 3, name: 'Supakpong Jinarat', email: 'supakpong@mail.com', phone: '098-1198875', image: './assets/images/cust03.jpg', lat: 13.8834267, lng: 100.5468333 });
    this.customers.push({ id: 4, name: 'Ekkasit Srisukha', email: 'ekkazit@mail.com', phone: '098-0099765', image: './assets/images/cust04.png', lat: 13.7748816, lng: 100.3802206 });
    this.customers.push({ id: 5, name: 'Pongpun Wansa', email: 'pongpun@mail.com', phone: '098-2234456', image: './assets/images/cust05.jpg', lat: 14.0428627, lng: 100.7295395 });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerListPage');
  }

  viewCustomerActionSheet(customer) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Select Actions',
      buttons: [
        {
          text: 'Edit',
          icon: 'create',
          handler: () => {
            this.navCtrl.push(CustomerDetailPage);
          }
        },
        {
          text: 'Call',
          icon: 'call',
          handler: () => {
            this.callNumber.callNumber(customer.phone, true)
              .then(() => console.log('Launched dialer!'))
              .catch(() => console.log('Error launching dialer'));
          }
        },
        {
          text: 'Map',
          icon: 'map',
          handler: () => {
            this.navCtrl.push(MapPage, { 'customer': customer });
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Destructive clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
