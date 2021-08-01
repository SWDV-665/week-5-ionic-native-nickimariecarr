import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(public dataService: GroceriesServiceService, public alertCtrl: AlertController) {
    console.log('Hello InputDialogService Service');
  }


  async showPrompt(item?: { name: any; quantity: any; }, index?: string | number) {
    const prompt = this.alertCtrl.create({
      message: item ?  "Please edit item...": "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null 
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item ? item.quantity :null 
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: _data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index !== undefined) {
            this.dataService.editItem(item, index)
          }
          else {
            this.dataService.addItem(item);
          }}
        }
      ]
    });
    (await prompt).present();
  }  

}
