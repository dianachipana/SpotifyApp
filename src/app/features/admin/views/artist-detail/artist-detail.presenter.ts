import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Album, Artist } from 'src/app/features/admin/models/album.model';
import { Track } from '@spotify/commons/interfaces/track.interface';
import { SpotifyHttp } from '@spotify/commons/http/spotify/spotify.http';
import { finalize } from 'rxjs/operators';


@Injectable()
export class ArtistDetailPresenter {
  artist: Artist;
  tracks: Track[] = [];
  loading = true;
 
  constructor(
    private spotify: SpotifyHttp,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
 
  ) {}

  listArtistDetail(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.spotify.getArtist(id)
    .subscribe(
      artist => this.artist = artist,
      err => console.log(err)
    );

    this.spotify.getArtistTracks(id)
    .subscribe(
      tracks => this.tracks = tracks,
      err => console.log(err)
    );
 }
 loadArtistDetail(){
  const id = this.activatedRoute.snapshot.paramMap.get('id');
  this.spotify.getArtistTracks(id)
  .pipe(finalize( () => this.loading = false))
      .subscribe(
        tracks => this.tracks = tracks,
        err => console.log(err));
   console.log('artist detail ');
  }
}
