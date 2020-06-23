import { Component, OnInit } from '@angular/core';
import { AdminPresenter } from './admin.presenter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ AdminPresenter ]
})
export class AdminComponent implements OnInit{
  header = {
    brandUrl: '/spotify',
    brand: 'Spotify App',
    logo: 'assets/logo.png',
    options: [
      { title: 'Buscar', url: '/spotify/search' },
     /*  { title: 'Cerrar sesion', url: '/login' }, */

    ]
  
   
  };

  constructor(public presenter: AdminPresenter,) { }
  ngOnInit(): void {
   /*  throw new Error("Method not implemented."); */
  }

}
