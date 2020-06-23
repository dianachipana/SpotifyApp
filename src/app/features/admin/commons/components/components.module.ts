import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MusicItemComponent } from './music-item/music-item.component';


const COMPONENTS = [
  MusicItemComponent
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
