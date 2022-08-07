import { Component, OnInit } from '@angular/core';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-ion-range',
  templateUrl: './ion-range.page.html',
  styleUrls: ['./ion-range.page.scss'],
})
export class IonRangePage implements OnInit {

  lastEmittedValue: RangeValue;

  rangeValue:number=100000;


  middleSlectedRange:number;

  constructor() { }

  ngOnInit() {
  }

  pinFormatter(value: number) {
    // this.middleSlectedRange=value
    const abc=value
    // this.middleSlectedRange=abc
    console.log("slected range",value);
    console.log("here we get selected value",abc);
    

    return `${value}%`;
    }


    onIonChange(e:any){
      console.log("here we get value--->",e.detail.value);
      this.rangeValue=e.detail.value
      console.log("in varibale value--->",this.rangeValue);
      
    }

}
