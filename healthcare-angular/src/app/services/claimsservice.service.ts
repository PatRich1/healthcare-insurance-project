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

}
