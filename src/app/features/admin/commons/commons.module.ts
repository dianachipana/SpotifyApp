import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { ComponentsModule } from './components/components.module';
import { SpotifyModule } from '@spotify/commons/http/spotify/spotify.module';
import { SpotifyErrorsInterceptorModule} from '@spotify/commons/interceptors';


@NgModule({
  exports: [
    UiModule,
    ComponentsModule,


    SpotifyModule,
    SpotifyErrorsInterceptorModule,
  ],
})
export class AdminCommonsModule { }
