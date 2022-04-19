import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Claims } from '../models/claims';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  public getClaims(): Observable<Claims[]> {
    return this.http.get<Claims[]>('http://localhost:8080/claim-app/claims');

  }
  public addClaim(newClaim: any): Observable<Claims> {
    console.log(newClaim);
    const headers = { 'content-type': 'application/json'}
    const body = JSON.parse(newClaim);
    return this.http.post<any>('http://localhost:8080/claim-app/claims', body);
  }

  public updateClaim(updateClaim: any): Observable<any>{
    console.log(updateClaim.claimId);
    console.log(updateClaim.status);
    let requestbody = JSON.stringify(updateClaim)
    const body = requestbody;
    const headers = { 'content-type': 'application/json'}
    console.log(headers);
   return this.http.put<any>('http://localhost:8080/claim-app/claims/' + updateClaim.claimId, body, {headers});
  }


}
