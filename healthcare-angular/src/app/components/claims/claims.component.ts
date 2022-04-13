import { Component, OnInit } from '@angular/core';
import { Claims } from 'src/app/models/claims';
import { ClaimsService } from 'src/app/services/claimsservice.service';
@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent {

claims: Claims[] = [];
  constructor(private ClaimsService: ClaimsService) { }

fetchClaims(): void {
  this.ClaimsService.getClaims().subscribe(claims => {}) 
  
  

}

}
