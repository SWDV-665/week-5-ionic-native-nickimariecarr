import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {
  [x: string]: any;

  items = [

  ];
  constructor() { 
    console.log('Hello GroceriesService Service');
  }

  getItems(){
    return this.items;
  };
  removeItem(index: any) {
    this.items.splice(index, 1);
  };

  addItem(items: { name: string; quantity: number; }){
    this.items.push(items);
  }

  editItem(items: any,index: any){
    this.items[index] = items;
  }


}
