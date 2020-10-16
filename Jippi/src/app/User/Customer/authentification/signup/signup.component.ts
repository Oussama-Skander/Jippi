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
