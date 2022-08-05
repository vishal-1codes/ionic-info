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
      //here we use only placeholder and attributes with maxlength in form of array object
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

  //movie review alert
  async openMovieReviewForm(){
    const alert=await this.alertController.create({
      header:'Inside Voice',
      buttons:[
        {
          text:'MY VOICE',
          //using handler we can get fill information 
          handler:(alertData)=>{
            console.log("alertData",alertData.yourthoughts,alertData.star,alertData.movieis);
            
          }
        }
      ],
      inputs:[
        {
          
          type:'textarea',
          placeholder:'Your thoughts',
          attributes:{
            maxlength:100
          },
          name:'yourthoughts',

        },
        {
          
          type:'number',
          placeholder:'Star',
          attributes:{
            min: 1,
            max: 10,
          },
          name:'star',
        },
        {
          placeholder:'movie is',
          attributes:{
            maxlength:4
          },
          name:'movieis'
        },
        
      ]
    })

    await alert.present()
  }

}
