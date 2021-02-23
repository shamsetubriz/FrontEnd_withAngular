import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isAuthenticated: boolean = false;
  public countries = [
    'USA',
    'UK',
    'Bangladesh',
    'KSA',
    'Pakistan'

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
