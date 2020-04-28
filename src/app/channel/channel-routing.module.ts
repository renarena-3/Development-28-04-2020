import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewChannelComponent } from './new-channel/new-channel.component';
import { ChannelSearchComponent } from './channel-search/channel-search.component';


const routes: Routes = [
  {path:'channelsearch',component:ChannelSearchComponent},
  {path:'newchannel',component:NewChannelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule { }
