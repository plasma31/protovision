import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { BestScoreManager } from '../round1.service';
import { CONTROLS, COLORS, BOARD_SIZE, GAME_MODES } from './constants';
import { Subscription, Observable,interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-question7',
  templateUrl: './question7.component.html',
  styleUrls: ['./question7.component.css'],
  host: {
    '(document:keydown)': 'handleKeyboardEvents($event)'
  }
})

export class Question7Component implements OnInit {
  counterState = new EventEmitter<string>();
  currentValue = '';
  currentSubscription: Subscription;
  startAt :number=0 ;
  protoparticipant:any;
  id:any;
  currparticipant: any;
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
    this.showMenu();
  }
  status="";
  control="Analyze the Controls";
  intervalTimer;
  private interval: number;
  private tempDirection: number;
  private default_mode = 'classic';
  private isGameOver = false;

  public all_modes = GAME_MODES;
  public getKeys = Object.keys;
  public board = [];
  public obstacles = [];
  public score = 0;
  public showMenuChecker = false;
  public gameStarted = false;
  public newBestScore = false;
  public best_score = this.bestScoreService.retrieve();

  private snake = {
    direction: CONTROLS.LEFT,
    parts: [
      {
        x: -1,
        y: -1
      }
    ]
  };

  private fruit = {
    x: -1,
    y: -1
  };

  constructor(private router:Router,
    private bestScoreService: BestScoreManager,private changeDetector: ChangeDetectorRef,private eveSer:EventService,private actRoute:ActivatedRoute) {
    this.setBoard();
  }
  startTimer() {
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
  handleKeyboardEvents(e: KeyboardEvent) {
    // console.log(this.currentValue);
    if(this.currentValue >= "01:30"){
      if (e.keyCode === CONTROLS.LEFT && this.snake.direction !== CONTROLS.LEFT) {
        this.tempDirection = CONTROLS.RIGHT;
      } else if (e.keyCode === CONTROLS.UP && this.snake.direction !== CONTROLS.UP) {
        this.tempDirection = CONTROLS.DOWN;
      } else if (e.keyCode === CONTROLS.RIGHT && this.snake.direction !== CONTROLS.RIGHT) {
        this.tempDirection = CONTROLS.LEFT;
      } else if (e.keyCode === CONTROLS.DOWN && this.snake.direction !== CONTROLS.DOWN) {
        this.tempDirection = CONTROLS.UP;
      }
    }
    else if(this.currentValue >= "00:45"){
      this.control="Controls Changed.";
      if (e.keyCode === CONTROLS.LEFT && this.snake.direction !== CONTROLS.DOWN) {
        this.tempDirection = CONTROLS.UP;
      } else if (e.keyCode === CONTROLS.UP && this.snake.direction !== CONTROLS.LEFT) {
        this.tempDirection = CONTROLS.RIGHT;
      } else if (e.keyCode === CONTROLS.RIGHT && this.snake.direction !== CONTROLS.UP) {
        this.tempDirection = CONTROLS.DOWN;
      } else if (e.keyCode === CONTROLS.DOWN && this.snake.direction !== CONTROLS.RIGHT) {
        this.tempDirection = CONTROLS.LEFT;
      }
    }
    else if(this.currentValue >= "00:00"){
      this.control="Controls Changed Again";
      if (e.keyCode === CONTROLS.LEFT && this.snake.direction !== CONTROLS.UP) {
        this.tempDirection = CONTROLS.DOWN;
      } else if (e.keyCode === CONTROLS.UP && this.snake.direction !== CONTROLS.RIGHT) {
        this.tempDirection = CONTROLS.LEFT;
      } else if (e.keyCode === CONTROLS.RIGHT && this.snake.direction !== CONTROLS.DOWN) {
        this.tempDirection = CONTROLS.UP;
      } else if (e.keyCode === CONTROLS.DOWN && this.snake.direction !== CONTROLS.LEFT) {
        this.tempDirection = CONTROLS.RIGHT;
      }
    }
  }

  setColors(col: number, row: number): string {
    if (this.isGameOver) {
      return COLORS.GAME_OVER;
    } else if (this.fruit.x === row && this.fruit.y === col) {
      return COLORS.FRUIT;
    } else if (this.snake.parts[0].x === row && this.snake.parts[0].y === col) {
      return COLORS.HEAD;
    } else if (this.board[col][row] === true) {
      return COLORS.BODY;
    } else if (this.default_mode === 'obstacles' && this.checkObstacles(row, col)) {
      return COLORS.OBSTACLE;
    }

    return COLORS.BOARD;
  };

  updatePositions(): void {
    let newHead = this.repositionHead();
    let me = this;

    if (this.default_mode === 'classic' && this.boardCollision(newHead)) {
      return this.gameOver();
    } else if (this.default_mode === 'no_walls') {
      this.noWallsTransition(newHead);
    } else if (this.default_mode === 'obstacles') {
      this.noWallsTransition(newHead);
      if (this.obstacleCollision(newHead)) {
        return this.gameOver();
      }
    }
    if (this.score == 15) {
      this.status="You Won!!"
      this.stop();
      return this.gameOver();
    }
    if (this.selfCollision(newHead) || this.currentValue=='00:00') {
      this.status="You Lose!";
      this.stop();
      return this.gameOver();
    } else if (this.fruitCollision(newHead)) {
      this.eatFruit();
    }

    let oldTail = this.snake.parts.pop();
    this.board[oldTail.y][oldTail.x] = false;

    this.snake.parts.unshift(newHead);
    this.board[newHead.y][newHead.x] = true;

    this.snake.direction = this.tempDirection;

    setTimeout(() => {
      me.updatePositions();
    }, this.interval);
  }

  repositionHead(): any {
    let newHead = Object.assign({}, this.snake.parts[0]);

    if (this.tempDirection === CONTROLS.LEFT) {
      newHead.x -= 1;
    } else if (this.tempDirection === CONTROLS.RIGHT) {
      newHead.x += 1;
    } else if (this.tempDirection === CONTROLS.UP) {
      newHead.y -= 1;
    } else if (this.tempDirection === CONTROLS.DOWN) {
      newHead.y += 1;
    }

    return newHead;
  }

  noWallsTransition(part: any): void {
    if (part.x === BOARD_SIZE) {
      part.x = 0;
    } else if (part.x === -1) {
      part.x = BOARD_SIZE - 1;
    }

    if (part.y === BOARD_SIZE) {
      part.y = 0;
    } else if (part.y === -1) {
      part.y = BOARD_SIZE - 1;
    }
  }

  addObstacles(): void {
    let x = this.randomNumber();
    let y = this.randomNumber();

    if (this.board[y][x] === true || y === 8) {
      return this.addObstacles();
    }

    this.obstacles.push({
      x: x,
      y: y
    });
  }

  checkObstacles(x, y): boolean {
    let res = false;

    this.obstacles.forEach((val) => {
      if (val.x === x && val.y === y) {
        res = true;
      }
    });

    return res;
  }

  obstacleCollision(part: any): boolean {
    return this.checkObstacles(part.x, part.y);
  }

  boardCollision(part: any): boolean {
    return part.x === BOARD_SIZE || part.x === -1 || part.y === BOARD_SIZE || part.y === -1;
  }

  selfCollision(part: any): boolean {
    return this.board[part.y][part.x] === true;
  }

  fruitCollision(part: any): boolean {
    return part.x === this.fruit.x && part.y === this.fruit.y;
  }

  resetFruit(): void {
    let x = this.randomNumber();
    let y = this.randomNumber();

    if (this.board[y][x] === true || this.checkObstacles(x, y)) {
      return this.resetFruit();
    }

    this.fruit = {
      x: x,
      y: y
    };
  }

  eatFruit(): void {
    this.score++;

    let tail = Object.assign({}, this.snake.parts[this.snake.parts.length - 1]);

    this.snake.parts.push(tail);
    this.resetFruit();

    if (this.score % 5 === 0) {
      this.interval -= 15;
    }
  }

  gameOver(): void {
    this.isGameOver = true;
    this.gameStarted = false;
    let me = this;

    if (this.score > this.best_score) {
      this.bestScoreService.store(this.score);
      this.best_score = this.score;
      this.newBestScore = true;
    }

    setTimeout(() => {
      me.isGameOver = false;
    }, 500);

    this.setBoard();
    this.Submit();
  }

  randomNumber(): any {
    return Math.floor(Math.random() * BOARD_SIZE);
  }

  setBoard(): void {
    this.board = [];

    for (let i = 0; i < BOARD_SIZE; i++) {
      this.board[i] = [];
      for (let j = 0; j < BOARD_SIZE; j++) {
        this.board[i][j] = false;
      }
    }
  }

  showMenu(): void {
    this.showMenuChecker = !this.showMenuChecker;
  }

  newGame(mode: string): void {
    this.startAt=120;
    this.startTimer();
    this.default_mode = mode || 'classic';
    this.showMenuChecker = false;
    this.newBestScore = false;
    this.gameStarted = true;
    this.score = 0;
    this.tempDirection = CONTROLS.LEFT;
    this.isGameOver = false;
    this.interval = 70;
    this.snake = {
      direction: CONTROLS.LEFT,
      parts: []
    };

    for (let i = 0; i < 3; i++) {
      this.snake.parts.push({ x: 10 + i, y: 10 });
    }

    if (mode === 'obstacles') {
      this.obstacles = [];
      let j = 1;
      do {
        this.addObstacles();
      } while (j++ < 9);
    }

    this.resetFruit();
    this.updatePositions();
  }
  Submit(){    
    var i;
    for(i=0;i<this.protoparticipant.length;i++){
      console.log(this.protoparticipant[i].id);
      if(this.id===this.protoparticipant[i].id){
        this.currparticipant=this.protoparticipant[i].data;
      }
    }
    let obj:any={'score':0};
       obj.score = this.score;
      obj.score = this.currparticipant.score + obj.score;
      console.log(obj.score);
      this.eveSer.addScore(this.id, obj).then(success=>{
        console.log(success);
      }).catch(error=>{console.log(error)});
    this.router.navigate(["/rover"], {
      queryParams: {
        id: this.id
      }
    });
  }
}
