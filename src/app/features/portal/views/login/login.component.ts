import { Component, OnInit } from '@angular/core';
import { LoginPresenter } from './login.presenter';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginPresenter]
})
export class LoginComponent implements OnInit {

  constructor(
    public presenter: LoginPresenter) { }

  ngOnInit(): void {
 

  }

}
