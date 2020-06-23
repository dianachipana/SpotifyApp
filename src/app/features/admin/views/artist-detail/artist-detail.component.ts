import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from '../../models/album.model';
import { ArtistDetailPresenter } from './artist-detail.presenter';


@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss'],
  providers: [ ArtistDetailPresenter]
})
export class ArtistDetailComponent implements OnInit {
 

  constructor(
    public presenter: ArtistDetailPresenter,
    private router: Router
   
  ) { }

  ngOnInit(): void {
 this.presenter.listArtistDetail()
 this.presenter.loadArtistDetail()
  }

  close(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
