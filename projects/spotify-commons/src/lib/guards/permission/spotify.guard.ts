import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/features/portal/views/services/auth.service';
import { SpotifyPermissionGuardModule } from './permission.module';


@Injectable({
  providedIn: SpotifyPermissionGuardModule
})
export class SpotifyGuard implements CanActivate {
  [x: string]: any;
  constructor(private router: Router ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (sessionStorage.getItem('token') != null) {
          console.log("hola ruta ")
      return true
      }
      console.log("hola ruta 1 ")
      this.router.navigate(['/login']);
      return false
  }
  
}
