import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { GroceriesServiceService } from './../groceries-service.service';
import { InputDialogServiceService } from './../input-dialog-service.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  [x: string]: any;

//app title on the page 
  title = "Grocery";
//grocery items that will output 

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogServiceService, public socialSharing: SocialSharing) {
  }

  //returning items from
  loadItems() {
    return this.dataService.items;
  }

//grocery items remove item function
  async removeItem(item: any, index: string) {
    console.log("Removing Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 3000
    });
    (await toast).present();
    this.dataService.removeItem(index);
  };

//grocery items list share function
async shareItem(item: any, index: string) {
  console.log("Sharing Item - ", item, index);
  const toast = this.toastCtrl.create({
    message: 'Sharing Item - ' + index + " ...",
    duration: 3000
  });
  (await toast).present();

  let message = "Grocery Item - Name: " + item.name + " - Quantity" + item.quantity
  let subject = "shared Via groceries app"
this.socialSharing.share(message, subject).then(() => {
// Sharing via email is possible
  console.log("Shared successfully!");
}).catch((error) => {
  console.error("Error while sharing ", error);
});

};
//grocery items edit item function
  async editItem(item: any, index: string) {
    console.log("Edit Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    (await toast).present();
    this.inputDialogService.showPrompt(item, index);
  } ;

//grocery items add item 
  addItem() {
    console.log("Adding Item");
    this.inputDialogService.showPrompt();
  };


}



