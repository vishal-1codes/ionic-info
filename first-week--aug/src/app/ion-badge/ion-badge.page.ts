import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-badge',
  templateUrl: './ion-badge.page.html',
  styleUrls: ['./ion-badge.page.scss'],
})
export class IonBadgePage implements OnInit {
  storeI:number;
  storeJ:any;
  constructor() { }

  ngOnInit() {
    this.dosettime()
  }

  dosettime(){
   for(let i=0;i<=3;i++){
    setTimeout(()=>{
      console.log("print i",i);
      this.storeI=i


      console.log("print store value",this.storeI,typeof(this.storeI));
   
      if(this.storeI>=3){
        this.setWhasapp()
      }else{
        console.log("whatsapp function not active");
      }

      

     },i*5000)
   }
   
  }

  setWhasapp(){
    for(let j=0;j<=12;j++){
      setTimeout(()=>{
        console.log("j value",j);
        this.storeJ=j
      },j*5000)
    }
  }

}
