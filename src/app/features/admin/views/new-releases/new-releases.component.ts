import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../../models/album.model';
import { NewReleasesPresenter } from './new-releases.presenter';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.scss'],
  providers: [ NewReleasesPresenter]
})
export class NewReleasesComponent implements OnInit {


  constructor(

    public presenter: NewReleasesPresenter
  ) { }

  ngOnInit(): void {
     this.presenter.list()
  }

  

}
