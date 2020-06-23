import { Injectable } from '@angular/core';

import { Router } from '@angular/router';




@Injectable()
export class AdminPresenter {

  constructor(
     private router: Router) { 
  }
  close(event){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
