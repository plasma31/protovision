import { FormControl, FormGroup } from "@angular/forms";
import {
  Component,
  OnInit,
  EventEmitter,
  ChangeDetectorRef
} from "@angular/core";
import { Subscription, Observable, interval } from "rxjs";
import { take } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { EventService } from "src/app/event.service";

@Component({
  selector: "app-question3",
  templateUrl: "./question3.component.html",
  styleUrls: ["./question3.component.css"]
})
export class Question3Component implements OnInit {
  counterState = new EventEmitter<string>();
  currentValue = "";
  currentSubscription: Subscription;
  eventForm = new FormGroup({
    textArea: new FormControl("")
  });
  currparticipant: any;
  id: any;
  protoparticipant: any;
  check: boolean = false;
  startAt: number = 0;
  interval;
  originalText = "elt!o@jose(“m;fw*";
  originText = this.reverseString(this.originalText);
  constructor(
    private changeDetector: ChangeDetectorRef,
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
    document.addEventListener("contextmenu", event => event.preventDefault());
    this.startAt = 45;
    this.startTimer();
    this.counterState.subscribe(state => {
      if (state === "COMPLETE") {
        this.check = false;
        this.submit();
      }
    });
    // this.keyboard();
  }
  // keyboard() {
  //   document.addEventListener("contextmenu", event => event.preventDefault());
  //   document.addEventListener("keydown", function(e) {
  //     if (
  //       e.which === 116 ||
  //       e.which === 17 ||
  //       e.which === 16 ||
  //       e.which === 91 ||
  //       e.which === 122 ||
  //       e.which === 82 ||
  //       e.which === 73 ||
  //       e.which === 67
  //     ) {
  //       // e.keydown = 0;
  //       e.returnValue = false;
  //       return false;
  //     }
  //   });
  // }
  startTimer() {
    console.log(this.startAt);
    this.currentValue = this.formatValue(this.startAt);
    this.changeDetector.detectChanges();

    const t: Observable<number> = interval(1000);

    this.currentSubscription = t
      .pipe(take(this.startAt))
      .map(v => this.startAt - (v + 1))
      .subscribe(
        v => {
          this.currentValue = this.formatValue(v);
          this.changeDetector.detectChanges();
        },
        err => {
          this.counterState.error(err);
        },
        () => {
          this.currentValue = "00:00";
          this.counterState.emit("COMPLETE");
          this.changeDetector.detectChanges();
        }
      );
  }
  stop() {
    this.currentSubscription.unsubscribe();
    this.counterState.emit("ABORTED");
  }
  formatValue(v) {
    const min = Math.floor(v / 60);
    const formattedmin = min > 9 ? min : "0" + min;

    const sec = v % 60;
    const formattedsec = sec > 9 ? sec : "0" + sec;

    return `${formattedmin}:${formattedsec}`;
  }
  spellCheck() {
    console.log(this.eventForm.value.textArea);
    console.log(this.originText);
    let textEntered = this.eventForm.value.textArea;
    if (textEntered == this.originText) {
      this.check = true;
    } else {
      this.check = false;
    }
  }
  reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }

  submit() {
    this.spellCheck();
    var i;
    for (i = 0; i < this.protoparticipant.length; i++) {
      console.log(this.protoparticipant[i].id);
      if (this.id === this.protoparticipant[i].id) {
        this.currparticipant = this.protoparticipant[i].data;
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
    this.router.navigate(["/round1/question3"], {
      queryParams: {
        id: this.id
      }
    });
  }
}
