import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./componente/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./componente/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./componente/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./componente/galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'vproducto',
    loadChildren: () => import('./componente/vproducto/vproducto.module').then( m => m.VproductoPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./componente/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'lcliente',
    loadChildren: () => import('./componente/lcliente/lcliente.module').then( m => m.LclientePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
