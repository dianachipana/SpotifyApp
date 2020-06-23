import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpotifyBannerComponent } from './banner.component';


@NgModule({
    declarations: [SpotifyBannerComponent],
    exports: [SpotifyBannerComponent],
    imports: [
        RouterModule
 
    ]
  })
  export class SpotifyBannerModule { }
  