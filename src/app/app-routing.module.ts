import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path:'index',
  loadChildren:'./index/index.module#IndexModule',
  },

  {  
  path: '',
  loadChildren:'./home/home.module#HomeModule'
  },

  {
    path:'menu',
    loadChildren:'./menu/menu.module#MenuModule'
  },
 
  {
    path:'channel',
    loadChildren:'./channel/channel.module#ChannelModule'  
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
