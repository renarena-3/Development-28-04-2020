import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from '../header/header.module';


const routes: Routes = [
 {
    path:'',component:HomeComponent,
    children:[    
      {
        path:'',loadChildren:'../header/header.module#HeaderModule'
      }
    ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
