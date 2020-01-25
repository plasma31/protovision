import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventService } from "src/app/event.service";

@Component({
  selector: "app-question2",
  templateUrl: "./question2.component.html",
  styleUrls: ["./question2.component.css"]
})
export class Question2Component implements OnInit {
  currparticipant: any;
  id: any;
  protoparticipant: any;
  check: boolean = false;
  constructor(
    private actRoute: ActivatedRoute,
    private eveSer: EventService,
    private router: Router
  ) {}

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
  }
  public validate() {
    var x = (<HTMLInputElement>document.getElementById("answer")).value;
    console.log(typeof(x));
    if (x.toLowerCase() == "voice") {
      this.check = true;
    } else {
      this.check = false;
    }
    console.log(this.check);
    var i;
    for (i = 0; i < this.protoparticipant.length; i++) {
      console.log(this.protoparticipant[i].id);
      if (this.id === this.protoparticipant[i].id) {
        this.currparticipant = this.protoparticipant[i].data;
        console.log(this.currparticipant);
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
    this.router.navigate(["/round1/question2"], {
      queryParams: {
        id: this.id
      }
    });
  }
}
