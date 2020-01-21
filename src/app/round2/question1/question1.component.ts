import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  constructor(private actRoute:ActivatedRoute,private eveSer:EventService,private router:Router) { }
  currparticipant: any;
  id:any;
  protoparticipant: any;
  check:boolean=false;
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
    document.addEventListener('contextmenu',event=> event.preventDefault());
    document.addEventListener('keydown', function(e) {
      if(e.which === 91||e.which === 122||e.which === 73||e.which === 67||e.which === 123) {
        // e.keydown = 0;
         e.returnValue = false;
         return false;
       }
    });
  }
  submit(c){
    this.check=c;
    var i;
    for(i=0;i<this.protoparticipant.length;i++){
      console.log(this.protoparticipant[i].id);
      if(this.id===this.protoparticipant[i].id){
        this.currparticipant=this.protoparticipant[i].data;
      }
    }
    console.log(this.currparticipant);
    let obj:any={};
       obj.firstplayer=this.currparticipant.firstplayer;
       obj.secondplayer=this.currparticipant.secondplayer;
       obj.number=this.currparticipant.number;
       obj.email=this.currparticipant.email;
    if(this.check===true){
      alert("HINT: d f"); 
      console.log("true and navigate");
      let score=5;
      obj.score=this.currparticipant.score+score;
      console.log(obj);
       this.eveSer.setScore(this.id,obj);
      
    }else{
      console.log("false and error");
      let score=0;
      obj.score=this.currparticipant.score+score;
      console.log(obj);
      // this.eveSer.setScore(this.id,obj);    
    }
   
    this.router.navigate(['/round2/question2'],{
      queryParams:{
        id: this.id
      }
    });
}
}
