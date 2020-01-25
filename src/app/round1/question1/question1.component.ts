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
        this.load();
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

//-----------------------------------------------------------------------Game Code----------------------------------------
load(){
  let gameTimeout=this.gameTimeout;
  let correct = this.correct;
  let reactionTimes=this.reactionTimes;
  let score= this.score;
  let game=this.game
  let endGame=this.endGame;
  let time = this.time;
  $(() => {
    this.clearCells();
  
    $("td").click(function() {
      clearTimeout(gameTimeout);
      correct = $(this).hasClass("cellselect");
      if (correct) {
        reactionTimes.push(parseInt((new Date().getTime() - time).toFixed(3)));
        score += 1;
        game(false);
      } else {
        endGame();
      }
    });
  
    $("svg").click(() => {
      if ($("#selector").is(":hidden")) {
        $("#selector").show();
        $("#howtoplay").hide();
      } else {
        $("#selector").hide();
        $("#howtoplay").show();
      }
    });
  });

}
getRandom(level: { gridSize: number; }, number: number) {
  const random = Math.floor((Math.random() * level.gridSize) + 1);
  if (random === number)
    return this.getRandom(level, number);
  else
    return random;
}
clearCells() {
  $("td").removeClass("cellselect");
}
endGame() {
  if (this.score > this.highscore) {
    this.highscore = this.score;
  }
  $(`#${this.intensity}`).addClass("hidden");
  $(`#${this.intensity}`).removeClass("selected");
  $("#gameover .score").text(this.score);
  $("#gameover .average").text(`${this.getAverage()} milliseconds`)
  $("#gameover .highscore").text(this.highscore);
  $("#gameover").show();
}
getAverage(){
  let count = 0;
  $.each(this.reactionTimes, (index, value) => {
    count = count + value
  });
  
  if(this.reactionTimes.length > 0)
    return (count / this.reactionTimes.length).toFixed(3);
  else
    return 0;
}
unhighlight() {
  $(".levelicon").each(function() {
    $(this).css("background-color", "#555555");
  });
}
getBackgroundColour(count: any) {
  // console.log("bgColor");
  switch (count) {
    case 1:
      return "#59DB28";
    case 2:
      return "#F6B921";
    case 3:
      return "#CA0424";
  }
}
highlight(count: number) {
  console.log("highlight");
  this.unhighlight();
  let bg=this.getBackgroundColour(count);
  $(".levelicon").each(function(index) {
    const itemCount = index + 1;
    const backgroundColour = bg;
    if (itemCount <= count)
      $(this).css("background-color", backgroundColour);
  });
}
countdown() {
  let timer = 3;
  $(".level").hide();
  $(".countdown").show();
  $(".countdown").text(timer);

  setInterval(() => {
    if (timer > 1) {
      timer = timer - 1;
      $(".countdown").text(timer);
    }
  }, 1000);
}
game(start: boolean) {
  this.clearCells();
  clearTimeout(this.gameTimeout);
  if (!this.correct && !start)
    this.endGame();
  else {
    this.correct = false;
    this.gameTimeout = 0;
    const level = defaults[this.intensity];
    this.timeout = level.timeout - (this.score * level.gridSize);
    const randomRow = this.getRandom(level, this.lastRandomRow);
    this.lastRandomRow = randomRow;
    const randomCell = this.getRandom(level, this.lastRandomCell);
    this.lastRandomCell = randomCell;
    const row = $(`#${this.intensity} tr`).eq(randomRow - 1);
    //$(row[0].cells[randomCell - 1]).addClass("cellselect");
    this.time = new Date().getTime();
    this.gameTimeout = setTimeout(() => {
      this.game(false);
    }, this.timeout);
  }
}

prepare(level: any) {
  $("svg").hide();
  this.countdown();
  this.intensity = level;
  switch (level) {
    case "easy":
      setTimeout(() => {
        this.start();
      }, 3000);
      break;
    case "medium":
      setTimeout(() => {
        this.start();
      }, 3000);
      break;
    case "hard":
      setTimeout(() => {
        this.start();
      }, 3000);
      break;
  }
}
start() {
  $("#selector").hide();
  const level = `#${this.intensity}`;
  $(level).removeClass("hidden");
  $(level).addClass("selected");
  this.game(true);
}
next() {
  alert("Go to next game");
}
restart() {
  if(this.count < 2) {
    this.intensity = null;
    this.correct = false;
    this.timeout = 0;
    this.score = 0;
    this.lastRandomCell = 0;
    this.lastRandomCell = 0;
    this.time = 0;
    this.reactionTimes = [];
    $("#gameover").hide();
    $("svg").show();
    $(".level").show();
    $(".countdown").hide();
    $("#selector").show();
    this.count++;
  }else {
    this.next();
  }
}



}
