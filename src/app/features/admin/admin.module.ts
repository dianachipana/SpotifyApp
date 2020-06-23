import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminCommonsModule } from './commons/commons.module';
import { ArtistDetailComponent } from './views/artist-detail/artist-detail.component';
import { NewReleasesComponent } from './views/new-releases/new-releases.component';
import { SearchArtistComponent } from './views/search-artist/search-artist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpotifyHeaderModule,SpotifyLoadingModule } from '@spotify/commons/components';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { SpotifyPermissionGuardModule } from '@spotify/commons/guards';
import { SpotifyErrorsInterceptorModule } from '@spotify/commons/interceptors';


@NgModule({
  declarations: [
    AdminComponent,
    ArtistDetailComponent,
    NewReleasesComponent,
    SearchArtistComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule,
    ReactiveFormsModule, 
    SpotifyHeaderModule,
    InterceptorsModule,
    SpotifyPermissionGuardModule,
    SpotifyLoadingModule,
   

    
   
  

  ]
})
export class AdminModule { }
