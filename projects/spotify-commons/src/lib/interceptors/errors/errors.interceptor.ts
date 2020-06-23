import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { style } from '@angular/animations';

@Injectable()
export class SpotifyErrorsInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        let message: string;
        console.log("hola message",message)
       switch(err.status){
         case 401:
          message= "El token de acceso expiró"
           break;
           default:
            message= "Error en el servidor"
       }

        this.snackBar.open(message, 'cerrar', { duration: 3000, verticalPosition: 'top', horizontalPosition: 'center'});
       
        return throwError(err);
      })
    );
  }
}
