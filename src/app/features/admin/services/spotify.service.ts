import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { NewReleaseResponse } from '@spotify/commons/interfaces/new-release-response.interface';
import { Album, Artist } from '../models/album.model';
import { Track } from '@spotify/commons/interfaces/track.interface';
import { TopTracksResponse } from '@spotify/commons/interfaces/top-tracks-response.interface';
import { SearchArtistsResponse } from '@spotify/commons/interfaces/search-artists-response.interface';

@Injectable({
  providedIn: ServicesModule
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(): Observable<Album[]> {
    return this.http.get<NewReleaseResponse>('browse/new-releases?limit=20')
    .pipe(
      map(res => res.albums.items)
    );
  }

  getArtist(id: string): Observable<Artist> {
    return this.http.get<Artist>(`artists/${id}`);
  }

  getArtistTracks(id: string): Observable<Track[]> {
    return this.http.get<TopTracksResponse>(`artists/${id}/top-tracks?country=us`)
    .pipe(
      map( res => res.tracks)
    );
  }

  searchArtists( q: string ): Observable<SearchArtistsResponse> {
    return this.http.get<SearchArtistsResponse>(`search?q=${q}&type=artist&limit=15`);
  }

}
