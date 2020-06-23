import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './features/admin/commons/components/components.module';
import { AdminRoutingModule } from './features/admin/admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpotifyPermissionGuardModule } from '@spotify/commons/guards';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
