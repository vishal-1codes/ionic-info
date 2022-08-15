import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-pagination',
  templateUrl: './ion-pagination.page.html',
  styleUrls: ['./ion-pagination.page.scss'],
})
export class IonPaginationPage implements OnInit {

  nameOne=[
    {sname:'vishal'},
    {sname:'vighnesh'},
    {sname:'vinayak'},
    {sname:'vijeta'},
    {sname:'vinay'},
    {sname:'vishakha'},
    {sname:'vanita'},
    {sname:'veshali'},
    {sname:'vimay'},
    {sname:'vikruti'},
    {sname:'vilas'},
    {sname:'vikas'},
    {sname:'venam'},
    {sname:'vicky'},
    {sname:'vinat'},
    {sname:'vikram'},
    {sname:'vishwas'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
