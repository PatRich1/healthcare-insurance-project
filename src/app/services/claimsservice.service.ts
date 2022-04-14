import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claims } from '../models/claims';

@Injectable({
  providedIn: 'root'
})
export class ClaimsserviceService {

  constructor(private http: HttpClient) { }

  public getClaims(): Observable<Claims[]>{
    return this.http.get<Claims[]>('http://localhost:8080/claim-app/claims');
  }
  
}
