import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ArtistDetailComponent } from './views/artist-detail/artist-detail.component';
import { NewReleasesComponent } from './views/new-releases/new-releases.component';
import { SearchArtistComponent } from './views/search-artist/search-artist.component';
import { SpotifyGuard } from '@spotify/commons/guards/permission/spotify.guard';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [SpotifyGuard],
    children: [
      { path: 'new-releases', component: NewReleasesComponent },
      { path: 'artist-detail/:id', component: ArtistDetailComponent },
      { path: 'search', component: SearchArtistComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
