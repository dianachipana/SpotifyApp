import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  Artist } from 'src/app/features/admin/models/album.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpotifyHttp } from '@spotify/commons/http/spotify/spotify.http';
import { finalize } from 'rxjs/operators';


@Injectable()
export class SearchPresenter {
formSearch: FormGroup;
  [x: string]: any;
  loading= false;
  artists: Artist[] = [];
  constructor(
    private fb: FormBuilder,
    private spotify: SpotifyHttp,
    private router: Router
 
  ) {

    this.formSearch = this.fb.group({
        q: ['', Validators.required]
      });
  }

 search() {
    if (this.formSearch.valid) {
      this.spotify.searchArtists(this.formSearch.value.q)
        .subscribe(
          res => this.artists = res.artists.items,
          err => console.log(err)
        );
      
    }
  }

  goArtist(id: string) {
    this.router.navigate(['/spotify/artist-detail', id]);
    // this.router.navigateByUrl('');
  }

  loadingArtistTracks(){
    this.spotify.searchArtists(this.formSearch.value)
    .pipe(finalize( () => 
    this.loading = false))
    .subscribe(
          tracks => this.artists = tracks.artists.items,
          err => console.log(err)
          );
    console.log('artists ');
  }
}



