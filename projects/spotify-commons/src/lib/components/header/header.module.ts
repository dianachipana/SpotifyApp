import { NgModule } from '@angular/core';
import { SpotifyHeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
    declarations: [SpotifyHeaderComponent],
    exports: [SpotifyHeaderComponent],
    imports: [
        CommonModule,
        RouterModule
     
 
    ]
  })
  export class SpotifyHeaderModule { }
  