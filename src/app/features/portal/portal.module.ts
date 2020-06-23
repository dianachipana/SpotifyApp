import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { HelpComponent } from './views/help/help.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PremiumComponent } from './views/premium/premium.component';
import { PortalCommonsModule } from './commons/commons.module';
import { SpotifyHeaderModule, SpotifyBannerModule} from '@spotify/commons/components';
import { UiModule } from './commons/ui/ui.module';
import { ServicesModule } from './views/services/services.module';
import { InterceptorsModule } from '../admin/interceptors/interceptors.module';
import { SpotifyPermissionGuardModule } from '@spotify/commons/guards';
import { SpotifyErrorsInterceptorModule } from '@spotify/commons/interceptors';



@NgModule({
  declarations: [
    PortalComponent,
    HelpComponent,
    HomeComponent,
    LoginComponent,
    PremiumComponent

  ],
  imports: [
    CommonModule,
    UiModule,
    PortalRoutingModule,
    PortalCommonsModule,
    SpotifyHeaderModule,
    SpotifyBannerModule,
    ServicesModule,
    InterceptorsModule,
    SpotifyPermissionGuardModule, 
 
  

 
  ]
})
export class PortalModule { }
