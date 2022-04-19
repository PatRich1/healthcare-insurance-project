import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Claims } from 'src/app/models/claims'; 
import { ClaimsService } from 'src/app/services/claimsservice.service';
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
