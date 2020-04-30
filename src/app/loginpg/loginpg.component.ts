import { Component, OnInit } from '@angular/core';
import { Loguser } from '../loguser';

@Component({
  selector: 'app-loginpg',
  templateUrl: './loginpg.component.html',
  styleUrls: ['./loginpg.component.css']
})
export class LoginpgComponent implements OnInit {
  loguser:Loguser

  constructor() { }

  ngOnInit(): void {
    this.loguser=new Loguser({
      email:"",
      pwd:""

    })
  }

}
