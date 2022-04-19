import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claims } from '../models/claims';


@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  constructor(private http: HttpClient) { }

  public getClaims(): Observable<Claims[]> {
    return this.http.get<Claims[]>('http://localhost:8080/claim-app/claims');
 }

 public getClaimsByStatus(status: string): Observable<Claims[]> {
  return this.http.get<Claims[]>('http://localhost:8080/claim-app/claims/status/' + status);
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
