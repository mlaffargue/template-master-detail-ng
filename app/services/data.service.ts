import { Injectable } from '@angular/core';
import { DataItem } from '../model/DataItem';

@Injectable()
export class DataService {
  private data:Array<DataItem>;
  
  constructor() {
    this.data = [];
    console.log('filling data');
    for (var i = 0; i < 50; i++) {
        this.data.push(new DataItem(i, "Name " + i, "Detail of " + i));
    }
  }
    
  getData():Array<DataItem> {
    return this.data;
  }
  
  getDetailFor(id: number): string {
      return this.data[id].detail;
  }
}