import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.page.html',
  styleUrls: ['./login-input.page.scss'],
})
export class LoginInputPage implements OnInit {

  public userLogin: User = {};

  constructor() { }

  ngOnInit() {
  }

}
