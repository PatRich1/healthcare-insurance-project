import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Claims } from 'src/app/models/claims';
import { ClaimService } from 'src/app/services/claim.service';


@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent {
      updateForm: any;

      claims: Claims[] = [];
      constructor(private claimService: ClaimService) { }

    fetchClaims(): void {
      this.claimService.getClaims().subscribe((allClaims: Claims[]) => {
        console.log(allClaims);
        this.claims = allClaims;
      }); 
    } 
    public updateClaims(updateForm: any): void {
        
      console.log(updateForm);
       this.claimService.updateClaim(updateForm).subscribe((updateClaim: Claims)=> {
        console.log(updateClaim);
        this.updateForm = updateClaim;
        })
        
      }
    ngOnInit(): void {
      this.updateForm = new FormGroup({
        claimId: new FormControl(),
        status: new FormControl()

      })

  }
  


}
