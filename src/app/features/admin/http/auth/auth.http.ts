import { Injectable } from '@angular/core';
import { ServicesModule } from './auth.module';
import { of } from 'rxjs';

@Injectable({
  providedIn: ServicesModule
})
export class AuthService {

  constructor() { }

  signIn() {
    return of('BQDAaoVZ8ApjJ9PnM-pP4WtquiAcaMM8ewHaSyosv6wFhzUhG4v2J9gQDeUEktHKzYmJnNLwZXHdAyz64NM');
  }
}
