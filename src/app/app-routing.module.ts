import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/* const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'premium', component: PremiumComponent },
      { path: 'help', component: HelpComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: 'spotify',
    loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule)
  },
  {
    path: 'spotify',
/*     canActivate: [GlxAuthenticatedGuard, GlxRolesGuard],
    data: { roles: [ UserRol.admin, UserRol.intructor ] }, */
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
  },
 /*  {
    path: 'autenticacion',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
