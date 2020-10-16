<<<<<<< HEAD
// import { Component } from '@angular/core';

// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css', './signup.component.scss'],
// })
// export class SignupComponent {
//   data: any = {
//     email: '',
//     password: '',
//   };

//   constructor(private httpClient: HttpClient) {}

//   ngOnInit(): void {
//     console.log('forms');
//   }
//   baseUrl = 'http://localhost:4200/';
//   register() {
//     this.httpClient.post(
//       this.baseUrl + '/api/register/customer/signup',
//       this.data,
//       { headers: { 'content-type': 'application/json' } }
//     );
//   }
// }
=======
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', './signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private hs: HttpService) {}

  ngOnInit(): void {
    console.log('forms');
  }
  register() {
    this.hs.signup().subscribe((data) => {
      console.log('register===>', data);
    });
  }
}
>>>>>>> 75c5339bd1b300d43db4933168271068b452ba5e
