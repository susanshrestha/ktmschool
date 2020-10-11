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
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'afterlogin',
    loadChildren: () => import('./pages/afterlogin/afterlogin.module').then( m => m.AfterloginPageModule)
  },
  {
    path: 'addtest',
    loadChildren: () => import('./pages/addtest/addtest.module').then( m => m.AddtestPageModule)
  },
  {
    path: 'addobjectivequestions',
    loadChildren: () => import('./pages/addobjectivequestions/addobjectivequestions.module').then( m => m.AddobjectivequestionsPageModule)
  },
  {
    path: 'addsubjectivequestions',
    loadChildren: () => import('./pages/addsubjectivequestions/addsubjectivequestions.module').then( m => m.AddsubjectivequestionsPageModule)
  },
  {
    path: 'editobjectivequestions',
    loadChildren: () => import('./pages/editobjectivequestions/editobjectivequestions.module').then( m => m.EditobjectivequestionsPageModule)
  },
  {
    path: 'editobjectiveindividual',
    loadChildren: () => import('./pages/editobjectiveindividual/editobjectiveindividual.module').then( m => m.EditobjectiveindividualPageModule)
  },
  {
    path: 'takeexam',
    loadChildren: () => import('./pages/takeexam/takeexam.module').then( m => m.TakeexamPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
