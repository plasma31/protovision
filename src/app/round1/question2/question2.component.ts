import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {
  currparticipant: any;
  id:any;
  protoparticipant: any;
  check:boolean=false;
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
  }
  public validate() {
    var x =  (<HTMLInputElement>document.getElementById("answer")).value;
    if(x === "r" || x === "R"){
        this.check = true;
    }else{
        this.check  = false;
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
    this.router.navigate(['/round1/question3'],{
      queryParams:{
        id: this.id
      }
    });
}

}
