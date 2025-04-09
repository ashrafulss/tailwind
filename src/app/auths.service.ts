


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthsService {



  constructor(private http: HttpClient) {}



  login(credentials: any): Observable<any> {

    
    return this.http.post<any>('http://localhost:8010/auth/api/v1/login', credentials, {withCredentials: true},);
  }



  test():Observable<any>{

    return this.http.post<any>('http://localhost:8080/greenlc/api/v1/hello', {}, { withCredentials: true });
  }






}
