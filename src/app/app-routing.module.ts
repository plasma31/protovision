import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoverComponent } from './rover/rover.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'rover',
    component: RoverComponent
  },
  {
    path: '',
    redirectTo: 'round2',
    pathMatch: 'full'
  },
  {
    path: 'round1',
    loadChildren: './round1/round1.module#Round1Module'
  },
  {
    path: 'round2',
    loadChildren: './round2/round2.module#Round2Module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
