import { Component, OnInit } from '@angular/core';

import { PortalPresenter } from './portal.presenter';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
  providers: [ PortalPresenter ]
})
export class PortalComponent implements OnInit {
  header = {
    brandUrl: '/',
    brand: 'Music App',
    logo: 'assets/logo.png',
    options: [
      { title: 'Premium', url: '/premium' },
      { title: 'Ayuda', url: '/help' },
      { title: 'Iniciar Sesión', url: '/login' },
    ]
  };
  constructor(public presenter: PortalPresenter ) { }

  ngOnInit(): void {
  }

}
