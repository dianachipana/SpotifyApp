import { NgModule } from '@angular/core';
import { UiModule } from '../../admin/commons/ui/ui.module';
import { SpotifyModule } from '@spotify/commons/http';
import { SpotifyErrorsInterceptorModule } from '@spotify/commons/interceptors/errors/errors.module';


@NgModule({
    exports: [
        UiModule,
        SpotifyModule,
        SpotifyErrorsInterceptorModule
        
    ]
})
export class PortalCommonsModule {}
