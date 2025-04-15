


import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthsService {

  private rawHttp: HttpClient;

  constructor(private http: HttpClient, private httpBackend: HttpBackend) {
      this.rawHttp = new HttpClient(httpBackend)

  }



  login(credentials: any): Observable<any> {

    
    return this.rawHttp.post<any>('http://localhost:8010/auth/api/v1/login', credentials, {withCredentials: true},);
  }






  test(): Observable<string> {
    return this.http.post<string>('http://localhost:8080/greenlc/api/v1/hello', {}, {
      withCredentials: true,
      responseType: 'text' as 'json'  // Tell Angular that the response is plain text
    });
  }
  
  





}
