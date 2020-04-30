import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-signupcomp',
  templateUrl: './signupcomp.component.html',
  styleUrls: ['./signupcomp.component.css']
})
export class SignupcompComponent implements OnInit {

  gender :string[];
  user:User;

  ngOnInit() {
 this.gender=['male','femlae','others']
 this.user=new User({
   email:"",password:{pwd:"", confirmpwd:""},
   gender:this.gender[0],terms:false

 })
  }
 
}
