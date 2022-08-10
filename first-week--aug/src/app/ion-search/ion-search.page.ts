import { Component, OnInit,ViewChild} from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-ion-search',
  templateUrl: './ion-search.page.html',
  styleUrls: ['./ion-search.page.scss'],
})
export class IonSearchPage implements OnInit {
@ViewChild(IonModal) modal: IonModal;
message:any="search Know"
name: string;


  searchTerm:any;

  employee=[
    {"name":"vishal","job":"Software developer"},
    {"name":"vighnesh","job":"Linux developer"},
    {"name":"ash","job":"Manager in medical"},
    {"name":"omi","job":"Software developer"},
    {"name":"avi","job":"Manager godrej"},
    {"name":"ritesh","job":"Manager Mercedeies"},
    {"name":"rav","job":"Teacher"},
    {"name":"subh","job":"Singer"},
    {"name":"neha","job":"dancer"},
  ]
  constructor() { }

  ngOnInit() {
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  clickList(e:any){
    console.log("value of e is",e.name);
    this.name=e.name
  }

}
