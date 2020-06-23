import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchPresenter } from './search-artist.presenter';


@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.scss'],
  providers: [ SearchPresenter]
})
export class SearchArtistComponent implements OnInit{
  formSearch: FormGroup;
 

  constructor(
    public presenter: SearchPresenter,
 
  ) {
    
  }
  ngOnInit(): void {
    this.presenter.loadingArtistTracks()
  }

 
}
