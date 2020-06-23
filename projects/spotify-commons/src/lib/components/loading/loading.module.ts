import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotifyLoadingComponent } from '..';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [SpotifyLoadingComponent],
  exports: [SpotifyLoadingComponent],
  imports: [
    CommonModule,
     MatProgressSpinnerModule 
  ]
})
export class SpotifyLoadingModule { }
