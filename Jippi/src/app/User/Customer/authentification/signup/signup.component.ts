import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', './signup.component.scss'],
})
export class SignupComponent {
  data: any = {
    email: '',
    password: '',
  };

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    console.log('forms');
  }
  baseUrl = 'http://localhost:4200/';
  register() {
    this.httpClient.post(
      this.baseUrl + '/api/register/customer/signup',
      this.data,
      { headers: { 'content-type': 'application/json' } }
    );
  }
}
