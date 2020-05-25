import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'personas',
    loadChildren: () => import('./pages/personas/personas.module').then(m => m.PersonasPageModule)
  },
  {
    path: 'login-input',
    loadChildren: () => import('./pages/login-input/login-input.module').then(m => m.LoginInputPageModule)
  },
  {
    path: 'signup-one',
    loadChildren: () => import('./pages/signup-one/signup-one.module').then(m => m.SignupOnePageModule)
  },
  {
    path: 'ongs-list',
    loadChildren: () => import('./pages/ongs-list/ongs-list.module').then( m => m.OngsListPageModule)
  },
  {
    path: 'ong-info',
    loadChildren: () => import('./pages/ong-info/ong-info.module').then( m => m.OngInfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
