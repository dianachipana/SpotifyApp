import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpotifyErrorsInterceptor } from '..';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyErrorsInterceptor,
      multi: true
    }
  ],
  imports: [
    MatSnackBarModule
  ]
})
export class SpotifyErrorsInterceptorModule { }
