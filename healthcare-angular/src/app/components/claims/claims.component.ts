import { ClaimsService } from './../../services/claimsservice.service';
import { Component, OnInit } from '@angular/core';
import { Claims } from 'src/app/models/claims';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent {
status: any;
claims: Claims[] = [];
  constructor(private claimsService: ClaimsService) { }

fetchClaims(): void {
 this.claimsService.getClaims().subscribe((allClaims: Claims[]) => {
   console.log(allClaims);
   this.claims = allClaims;

 }); 
}

fetchClaimsByStatus(status: any): void { 
  console.log(status);
  this.claimsService.getClaimsByStatus(status).subscribe((
    statusClaims: Claims []) => {
      console.log(statusClaims); 
      this.claims = statusClaims;
    })
   }

}
