import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Claims } from '../models/claims';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  url = environment.claimAPI;

  constructor(private http: HttpClient) { }
  getClaims(): Observable<any>{   
    return this.http.get<any>(this.url + '/claims');
  }

  addClaim(newClaims: Claims): Observable<Claims>{
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(newClaims);
    return this.http.post<Claims>(this.url + '/claims', body);
  }
}
