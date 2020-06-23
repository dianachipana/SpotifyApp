import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: ServicesModule
})
export class AuthService {

  constructor() { }

  signIn() {
    return of('BQCfs2UKUbFnMby_NvdtJFyCZAtd1rJFaA1SxgZXC7_oxzU3aPgeKUqoBeTF30GC0KUAEMTYI-A71w3ny48');
  }
}
