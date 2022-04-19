import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Claims } from 'src/app/models/claims';
import {HttpClientModule} from '@angular/common/http';
import { ClaimsService } from 'src/app/services/claimsservice.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent {


  submitclaim: any;

  constructor(private claimService: ClaimsService){}

  ngOnInit(): void {
    this.submitclaim = new FormGroup({
      description: new FormControl(),
      amount: new FormControl(),
      date: new FormControl(),
      status: new FormControl('pending'),
       user: new FormGroup({
        userId: new FormControl(),
        firstName: new FormControl(),
        lastName: new FormControl()
      })

    })

}

  onSubmit(submitclaim: any){
    console.log(submitclaim);
    let newClaim = JSON.stringify(submitclaim);
    this.claimService.addClaim(newClaim).subscribe(() => {
    })
  }



}

