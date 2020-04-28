import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { ChannelRoutingModule } from './channel-routing.module';

import { NewChannelComponent } from './new-channel/new-channel.component';
import { ChannelSearchComponent } from './channel-search/channel-search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ NewChannelComponent, ChannelSearchComponent],
  imports: [
    CommonModule,
    ChannelRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgbModule,
  ]
})
export class ChannelModule { }
