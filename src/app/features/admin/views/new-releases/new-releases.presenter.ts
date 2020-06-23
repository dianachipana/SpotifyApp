import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Album, Artist } from 'src/app/features/admin/models/album.model';
import { Track } from '@spotify/commons/interfaces/track.interface';
import { SpotifyHttp } from '@spotify/commons/http/spotify/spotify.http';
import { SpotifyLoadingComponent } from '@spotify/commons/components';

@Injectable()
export class NewReleasesPresenter {
  [x: string]: any;
  albums: Album[] = [];
  loading = true;
  artist: Artist;
  tracks: Track[] = [];

  constructor(
    private spotify: SpotifyHttp,
    private router: Router,
    private dialog: MatDialog,
 
  ) {}

  list(){
    this.spotify.getNewReleases()
    .subscribe(
      albums => this.albums = albums,
      err => console.log(err),
    );
 }

  goArtist(id: string) {
  const loading = this.dialog.open(SpotifyLoadingComponent, { disableClose: true });    
  setTimeout (() => {
    loading.close();
  }, 1500);
  this.router.navigate(['/spotify/artist-detail', id]);
  }
}

