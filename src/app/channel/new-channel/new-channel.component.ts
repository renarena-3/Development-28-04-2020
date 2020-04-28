import { Component, OnInit } from '@angular/core';
import { SlaparamService } from 'src/app/core/slaparam.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-channel',
  templateUrl: './new-channel.component.html',
  styleUrls: ['./new-channel.component.css']
})
export class NewChannelComponent implements OnInit {

 public newchannelForm:FormGroup;


  constructor(  
                public slaparam:SlaparamService, 
                 private fb:FormBuilder 
             ) { }

  ngOnInit(){
    this.newchannelForm = this.fb.group({
      clientid:[null],
      channelid: [null,[Validators.required]],
      name:[null,[Validators.required]],
      channeltype:[null,[Validators.required]],
      systemaccess:[null],
      identificationno1:[null],
      startdt:[null,],
      status:[null],
      mobile:[null],
      emailid:[null,Validators.email],
      secphone:[null],
      secemail:[null,Validators.email],
      commissionid:[null],
      busndesc:[null],
      dynafld01:[null],
      dynafld02:[null],
      creditlimit:[null],
      usedlimit:[null],
      comments:[null],
      city:[null],
      district:[null],
      zipcode:[null],
      addr1:[null],
      addr2:[null],
      
  });

}
}
