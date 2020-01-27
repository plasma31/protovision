import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {
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

  validate() {
    var x = (<HTMLInputElement>document.getElementById("answer")).value;
    if (x.toLowerCase() === "queue") {
      this.check = true;
    } else {
      this.check = false;
    }
    // console.log(this.check);
    var i;
    for (i = 0; i < this.protoparticipant.length; i++) {
      // console.log(this.protoparticipant[i].id);
      if (this.id === this.protoparticipant[i].id) {
        this.currparticipant = this.protoparticipant[i].data;
      }
    }
    let obj: any = {'score':0};
    // obj.firstplayer = this.currparticipant.firstplayer;
    // obj.secondplayer = this.currparticipant.secondplayer;
    // obj.number = this.currparticipant.number;
    // obj.email = this.currparticipant.email;
    if (this.check === true) {
      swal("HINT: W");
      // console.log("true and navigate");
      // let score = 5;
      obj.score = 5;
      // console.log(obj);
      // this.eveSer.addScore(this.id, obj);
    } else {
      // console.log("fasle and error");
      // let score = 0;
      obj.score = 0;
      // console.log(obj);
      // this.eveSer.addScore(this.id, obj);
    }
    obj.score = this.currparticipant.score + obj.score;
    console.log(obj.score);
    this.eveSer.addScore(this.id, obj).then(success=>{
      console.log(success);
    }).catch(error=>{console.log(error)});
    this.router.navigate(["/round2/question5"], {
      queryParams: {
        id: this.id
      }
    });
  }
}
