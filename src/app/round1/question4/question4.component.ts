import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription, interval, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';


@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {
    counterState = new EventEmitter<string>();
    currentValue = '';
    currentSubscription: Subscription;
  eventForm = new FormGroup({
    textArea:new FormControl('')
  });
  currparticipant: any;
  id:any;
  protoparticipant: any;
  check:boolean=false;
  startAt :number=0 ;
  originalText ="Lopem qpsum doloe sut amet an vjm elot posldonlum. Wum wu numquam tempolybus medosetatem. gd hs mals emod.";
  originText=this.reverseString(this.originalText);
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
    document.addEventListener('contextmenu', event => event.preventDefault());
    console.log(this.startAt);
    this.startAt=120;
  this.startTimer();
  this.counterState.subscribe( state => {
  if (state === 'COMPLETE') {
    this.check=false;
    this.submit();
  }
});
}
   startTimer() {
    console.log(this.startAt);
    this.currentValue = this.formatValue(this.startAt);
    this.changeDetector.detectChanges();

    const t: Observable<number> = interval(1000);

    this.currentSubscription = t.pipe(take(this.startAt)).map(v => this.startAt - (v + 1) ).subscribe(v => {
      this.currentValue = this.formatValue(v);
      this.changeDetector.detectChanges();
    }, err => {
      this.counterState.error(err);
    }, () => {
      this.currentValue = '00:00';
      this.counterState.emit('COMPLETE');
      this.changeDetector.detectChanges();
    });
  }
   stop() {
    this.currentSubscription.unsubscribe();
    this.counterState.emit('ABORTED');
  }
   formatValue (v) {
    const min = Math.floor(v / 60);
    const formattedmin = (min > 9 ? min : '0' + min);

    const sec = v % 60;
    const formattedsec = (sec > 9 ? sec : '0' + sec);

    return `${formattedmin}:${formattedsec}`;
  }
  spellCheck() {
    console.log(this.eventForm.value.textArea);
    console.log(this.originText);
    let textEntered = this.eventForm.value.textArea;
    if(textEntered==this.originText){
      this.check=true;
    }else{
      this.check=false;
    }
  }
  reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }

submit(){
  this.spellCheck();
  var i;
  for(i=0;i<this.protoparticipant.length;i++){
    console.log(this.protoparticipant[i].id);
    if(this.id===this.protoparticipant[i].id){
      this.currparticipant=this.protoparticipant[i].data;
    }
  }
  let obj:any={};
    obj.firstplayer=this.currparticipant.firstplayer;
    obj.secondplayer=this.currparticipant.secondplayer;
    obj.number=this.currparticipant.number;
    obj.email=this.currparticipant.email;
  if(this.check===true){
    let score=5;
    obj.score=this.currparticipant.score+score;
    console.log(obj);
    this.eveSer.setScore(this.id,obj);
  }else{
    let score=0;
    obj.score=this.currparticipant.score+score;
    console.log(obj);
    this.eveSer.setScore(this.id,obj);    
  }
  this.router.navigate(['/round1/question5'],{
    queryParams:{
      id: this.id
    }
  });
}
}
