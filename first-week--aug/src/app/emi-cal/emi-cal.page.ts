import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-emi-cal',
  templateUrl: './emi-cal.page.html',
  styleUrls: ['./emi-cal.page.scss'],
})
export class EmiCalPage implements OnInit {

  emiForm:FormGroup;

  constructor(public formbuild:FormBuilder) {
    
  }

  

  ngOnInit() {
    this.emiForm=this.formbuild.group({
      amount:['',[Validators.required] ],
      backrate:['',[Validators.required] ],
      months:['',[Validators.required] ],
    })
  }

  resetForm(){
    this.emiForm.reset()
  }

  getFormData(){
    console.log("here we get all form value",this.emiForm);
    var amountA=this.emiForm.value.amount
    var backrateA=this.emiForm.value.backrate
    var monthsA=this.emiForm.value.months
    console.log("amount",amountA,"backrate",backrateA,"months",monthsA);

    // Calculating interest per month
    const interest = (amountA * (backrateA * 0.01)) / monthsA;

    console.log("interest",interest);

    const total = ((amountA / monthsA) + interest).toFixed(2);

    console.log("here we get total",total);
    
    
    
    setTimeout(()=>{
      this.resetForm()
    },180000)
    
  }

}
