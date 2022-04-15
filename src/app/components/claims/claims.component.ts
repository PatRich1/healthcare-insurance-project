import { Component, OnInit } from '@angular/core';
import { Claims } from 'src/app/models/claims';
import { ClaimService } from 'src/app/services/claim.service';


@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent {

  claims: Claims[] = [];
  constructor(private claimSvc:ClaimService) { }
  fetchClaims(): void {
  this.claimSvc.getClaims().subscribe((allClaims: Claims[]) => {
   console.log(allClaims);
   this.claims = allClaims;
    }); 

  }

}
