import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const headers = new HttpHeaders();

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  data: any = {
    email: '',
    password: '',
  };

  baseUrl = 'http://127.0.0.1:3008';

  signup() {
    return this.http.post(
      this.baseUrl + '/api/register/customer/signup',
      this.data,
      { headers: { 'content-type': 'application/json' } }
    );
  }
}
