import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  login: ContractorLogin;
  constructor() {
    // tslint:disable-next-line: no-use-before-declare
    this.login = new ContractorLogin();
  }

  ngOnInit() {
  }

  loginUser() {
    if (this.login.userName && this.login.password) {
      const apiRequest = {
        Model: this.login
      };
    }
  }

}

export class ContractorLogin {
  userName: string;
  password: string;
}
