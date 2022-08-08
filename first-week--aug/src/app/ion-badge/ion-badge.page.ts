import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-badge',
  templateUrl: './ion-badge.page.html',
  styleUrls: ['./ion-badge.page.scss'],
})
export class IonBadgePage implements OnInit {
  storeI:any;

  constructor() { }

  ngOnInit() {
    this.dosettime()
  }

  dosettime(){
   for(let i=0;i<=10;i++){
    setTimeout(()=>{
      console.log("print i",i);
      this.storeI=i
     },i*5000)
   }

  }

}
