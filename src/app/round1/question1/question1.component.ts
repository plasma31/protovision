import {  Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
const defaults = {
  "hard": {
    "gridSize": 5,
    "timeout": 10000000
  }
};
@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})

export class Question1Component implements OnInit {
  check:boolean=false;
  id:any;
  currparticipant: any;
  protoparticipant: any;

  intensity: string | number;
  time: number;
 
  score = 0;
  highscore = 0;
  gameTimeout = 0;
  timeout = 0;
  correct = false;
  lastRandomRow = 0;
  lastRandomCell = 0;
  reactionTimes = [];
  count = 1;
  constructor(private actRoute:ActivatedRoute,private eveSer:EventService,private router:Router) { }
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
  }
  keyboard() {
    // document.addEventListener('contextmenu',event=> event.preventDefault());
    document.addEventListener('keydown', function(e) {
      if(e.which === 116 || e.which === 17||e.which === 16||e.which === 73||e.which === 91||e.which === 122||e.which === 67||e.which === 73) {
        // e.keydown = 0;
         e.returnValue = false;
         return false;
       }
    });
  }
  validate() {
    
    var i: number;
    for(i=0;i<this.protoparticipant.length;i++){
      console.log(this.protoparticipant[i].id);
      if(this.id===this.protoparticipant[i].id){
        this.currparticipant=this.protoparticipant[i].data;
      }
    }
    console.log(this.currparticipant); 
    var x =( <HTMLInputElement>document.getElementById("answer")).value;
    if(x == "3" ){
        this.check = true;
    }else{
        this.check  = false;
    }
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
    this.router.navigate(['/round1/question2'],{
      queryParams:{
        id: this.id
      }
    });
    console.log(this.check);
}
}
