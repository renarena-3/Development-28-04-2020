import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PipeModule } from './pipe/pipe.module';
import { FilterPipe } from './pipe/filter.pipe';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[PipeModule],
  providers:[FilterPipe]
})
export class SharedModule { }
