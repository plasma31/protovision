import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery';
import { Subscription, interval, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-question6',
  templateUrl: './question6.component.html',
  styleUrls: ['./question6.component.css']
})
export class Question6Component implements OnInit {
  originaltext="FACT THE SIZE OF SUN IS 695510 KM";
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
    this.keyboard();
    this.startAt=300;
  this.startTimer();
  this.counterState.subscribe( state => {
  if (state === 'COMPLETE') {
    this.check=false;
    this.Submit();
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
  keyboard(){

    if (window.performance) {
      console.info("window.performance works fine on this browser");
    }
      if (performance.navigation.type == 1) {
        //console.info( "This page is reloaded" );
        
      }
  document.addEventListener('contextmenu', event => event.preventDefault());
  //diabling keyboard 
  document.onkeydown = function (e) {
    return false;
  }
  var $keyboardWrapper = $(".virtual-keyboard"),
  $key = $keyboardWrapper.find("input"),
  $key_delete = $(".delete"),
  $key_shift = $(".shift"),
  $outputField = $(".output input"),
  $currentValue = $outputField.val(),
  actionKeys = $(".delete,.shift");
// handle keystrokes
function _keystroke(keyCase) {
  $key.not(actionKeys).on("click", function(e) {
    e.preventDefault();

    keyCase = "upper";

    // handle case
    if (keyCase == "upper") {
      var keyValue = $(this).val().toString().toUpperCase();
    } else {
      var keyValue = $(this)
        .val().toString().toLowerCase();
    }

    // grab current value
    var output = $(".output input").val();
    $outputField.val(output + keyValue);
    getCurrentVal();
    focusOutputField();
  });
} // keystroke

// delete
$key_delete.on("click", function(e) {
  e.preventDefault();
  $outputField.val($currentValue.toString().substr(0, $currentValue.toString().length - 1));
  getCurrentVal();
  focusOutputField();
});
function getCurrentVal() {
  $currentValue = $outputField.val();
}
function focusOutputField() {
  $outputField.focus();
}
_keystroke("upper"); // init keystrokes
}
  Submit(){
    var outputtext =(<HTMLInputElement>document.getElementById("output")).value;
    //console.log(outputtext.value);
    if(this.originaltext == outputtext) {
      this.check = true; 
    }
    console.log(this.check);
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
    this.router.navigate(['/round1/question7'],{
      queryParams:{
        id:this.id,
        firstplayer:obj.firstplayer,
        secondplayer:obj.secondplayer,
        number:obj.number,
        email:obj.email,
        score:obj.score
      }
    });
  }

}
