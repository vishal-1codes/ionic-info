import { Component, OnInit,ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public topCount:number=15;
  public dataArray:any=[]

  data=[
    {namev:'one'},
    {namev:'two'},
    {namev:'three'},
    {namev:'four'},
    {namev:'five'},
    {namev:'six'},
    {namev:'seven'},
    {namev:'eight'},
    {namev:'nine'},
    {namev:'ten'},
    {namev:'11'},
    {namev:'12'},
    {namev:'13'},
    {namev:'14'},
    {namev:'15'},
    {namev:'16'},
    {namev:'17'},
    {namev:'18'},
    {namev:'19'},
    {namev:'20'},
    {namev:'21'},
    {namev:'22'},
    {namev:'23'},
    {namev:'24'},
    {namev:'25'},
    {namev:'26'},
    {namev:'27'},
    {namev:'28'},
    {namev:'29'},
    {namev:'30'},
    {namev:'31'},
    {namev:'32'},
    {namev:'33'},
    {namev:'34'},
    {namev:'35'},
    {namev:'36'},
    {namev:'37'},
    {namev:'38'},
    {namev:'39'},
    {namev:'40'},
    {namev:'41'},
    {namev:'42'},
    {namev:'43'},
    {namev:'44'},
    {namev:'45'},
    {namev:'46'},
    {namev:'47'},
    {namev:'48'},
    {namev:'49'},
    {namev:'50'},
    {namev:'51'},
  ]

  constructor() {
    this.dataArray=this.data.slice(0,this.topCount)
    console.log("here we get 1st five element",this.dataArray);
    
  }

  loadData(event) {
    setTimeout(() => {
      // console.log('Done');
      this.topCount += 5;
      this.dataArray=this.data.slice(0,this.topCount)
      event.target.complete();


      // App logic to determine if all data is loaded
      // and disable the infinite scroll

      //bellow if condition user for when length of data in 24 hit then disable printed data
      // if (this.data.length === 24) {
      //   event.target.disabled = true;
      // }
      
      //increase loading time
    }, 500);
  }

  ngOnInit() {
  }

  

  //this function for hind and show data 
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
