import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ion-alert',
  templateUrl: './ion-alert.page.html',
  styleUrls: ['./ion-alert.page.scss'],
})
export class IonAlertPage implements OnInit {

  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }
  async openForm(){
    //create varibale
    const alert=await this.alertController.create({
      header: 'Please enter your imformation',
      //message inside array
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Name'
        },
        {
          placeholder: 'Father Name',
          attributes: {
            maxlength: 8,
          }
        },
        {
          type: 'number',
          placeholder: 'age',
          attributes: {
            maxlength: 2,
          }
        },
        {
          type: 'textarea',
          placeholder: 'Hobbie'
        }
      ]
    })

    //here we close alert
    await alert.present()
    
  }

}
