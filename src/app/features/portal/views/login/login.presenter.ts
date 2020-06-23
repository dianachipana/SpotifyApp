import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SpotifyLoadingComponent } from '@spotify/commons/components';
import { Album } from 'src/app/features/admin/models/album.model';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginPresenter {
  album: Album[] = [];
  loading = true;

  constructor(
    private auth: AuthService,
    private dialog: MatDialog,
    private router: Router ,

  ) {}

  signIn() {
    const loading = this.dialog.open(SpotifyLoadingComponent, { disableClose: true });
    this.auth.signIn()
   .subscribe(
      token => {
   
         sessionStorage.setItem('token', token); 
        console.log("storage", sessionStorage.getItem('token'))
        setTimeout (() => {
          loading.close();
          this.router.navigateByUrl('/spotify/new-releases');
    }, 1500);
   
      
       
      }
    );
   
  }



}
