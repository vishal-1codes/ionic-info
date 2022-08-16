import { Component, OnInit,ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

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
  ]

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll

      //bellow if condition user for when length of data in 24 hit then disable printed data
      if (this.data.length === 24) {
        event.target.disabled = true;
      }
      
      //increase loading time
    }, 500);
  }

  //this function for hind and show data 
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
