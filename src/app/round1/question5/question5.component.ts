import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery';
import { Subscription, Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';


@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})

export class Question5Component implements OnInit {
  originaltext="YNI3C4IS8QN6APEBS28";
  count: boolean=true;
  check: boolean=false;
  currparticipant: any;
  id:any;
  protoparticipant: any;
  counterState = new EventEmitter<string>();
  currentValue = '';
  currentSubscription: Subscription;
  startAt :number=0 ;
  constructor(private changeDetector: ChangeDetectorRef,private actRoute:ActivatedRoute,private eveSer:EventService,private router:Router) { }

  ngOnInit() {
    this.actRoute.queryParams.subscribe(params => {
      console.log(params);
      let obj:any = params;
      this.id=params.id;
    });
    this.eveSer.getScore().subscribe(success => {
      this.protoparticipant = success;
      console.log(success);
      }, error => {
        console.log(error);
      });
    this.startAt=120;
  this.counterState.subscribe( state => {
  if (state === 'COMPLETE') {
    this.check=false;
    this.Submit();
  }
});
  }


  Submit(){
    var x = (<HTMLInputElement>document.getElementById("answer")).value;
    if (x == "2") {
      this.check = true;
    } else {
      this.check = false;
    }
    var i;
    for(i=0;i<this.protoparticipant.length;i++){
      if(this.id===this.protoparticipant[i].id){
        this.currparticipant=this.protoparticipant[i].data;
      }
    }
    let obj:any={'score':0};
    if (this.check === true) {
       obj.score = 5;
    } else {
      obj.score = 0;
    }
      obj.score = this.currparticipant.score + obj.score;
      console.log(obj.score);
      this.eveSer.addScore(this.id, obj).then(success=>{
        console.log(success);
      }).catch(error=>{console.log(error)});
    this.router.navigate(["/round1/question5"], {
      queryParams: {
        id: this.id
      }
    });
  }

}
