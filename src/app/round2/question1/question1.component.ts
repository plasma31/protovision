import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventService } from "src/app/event.service";

@Component({
  selector: "app-question1",
  templateUrl: "./question1.component.html",
  styleUrls: ["./question1.component.css"]
})
export class Question1Component implements OnInit {
  constructor(
    private actRoute: ActivatedRoute,
    private eveSer: EventService,
    private router: Router
  ) {}
  currparticipant: any;
  id: any;
  protoparticipant: any;
  check: boolean = false;
  ngOnInit() {
    this.actRoute.queryParams.subscribe(params => {
      console.log(params);
      let obj: any = params;
      this.id = params.id;
    });
    this.eveSer.getScore().subscribe(
      success => {
        this.protoparticipant = success;
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
    // this.keyboard();
  }
  // keyboard() {
  //   document.addEventListener("contextmenu", event => event.preventDefault());
  //   document.addEventListener("keydown", function(e) {
  //     if (
  //       e.which === 91 ||
  //       e.which === 122 ||
  //       e.which === 73 ||
  //       e.which === 67 ||
  //       e.which === 123
  //     ) {
  //       // e.keydown = 0;
  //       e.returnValue = false;
  //       return false;
  //     }
  //   });
  // }
  validate(c) {
    // var x = (<HTMLInputElement>document.getElementById("answer")).value;
    if (c) {
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
      alert("HINT: d g");
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
    this.router.navigate(["/round2/question2"], {
      queryParams: {
        id: this.id
      }
    });
  }
}
