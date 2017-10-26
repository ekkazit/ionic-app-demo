import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { BarcodeScanner } from "@ionic-native/barcode-scanner";


@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public barcodeScanner: BarcodeScanner,
    public toastCtrl: ToastController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }

  doScanQRCode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
        return false;
      }
      console.log("Scanned successfully!");
      console.log(barcodeData);
      console.log(barcodeData.text);
      let toast = this.toastCtrl.create({
        message: barcodeData.text,
        duration: 3000
      });
      toast.present();
    }, (err) => {
      console.log(err);
    });
  }
}
