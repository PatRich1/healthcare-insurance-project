import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Claims } from 'src/app/models/claims';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent {

 // ClaimsModel = new Claim('5', 'Sprain Ankle', '800', 4-14-2022, 3);

  constructor(){}

  public onSubmit() {
   console.log('submited');
  }

}
