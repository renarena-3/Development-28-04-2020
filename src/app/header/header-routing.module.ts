import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {
    path:'',component:HeaderComponent,
  children:[
    {
    path: '',
    loadChildren: '../menu/menu.module#MenuModule'
  }
  ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }



