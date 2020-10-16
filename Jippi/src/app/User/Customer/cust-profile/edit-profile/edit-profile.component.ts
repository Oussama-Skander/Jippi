import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  firstName: String = '';
  lastName: String = '';
  phoneNumber: Number = null;
  email: String= '';
  password: String = '';
  confirmPassword: String = '';
  url: any;

  constructor() { }

  ngOnInit(): void {
    
  }
  ngDoCheck(){
// console.log('===>',this.url);

  }
//function to read avatar url
 onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => { 
        this.url = event.target.result;
      }
    }
  }

}
