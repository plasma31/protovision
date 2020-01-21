import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';


@Component({
  selector: 'app-question7',
  templateUrl: './question7.component.html',
  styleUrls: ['./question7.component.css']
})
export class Question7Component implements OnInit {
  constructor(private actRoute:ActivatedRoute,public eveSer:EventService,public router:Router) {}
  currparticipant: any;
  id:any;
  ngOnInit() {
        this.load();
  }
  load(){
    this.actRoute.queryParams.subscribe(params => {
      console.log(params);
      this.currparticipant=params;
      this.id=params.id;
      console.log(this.id);
    });
    let won;
    var minutes;
    var seconds;
    var canvas = <HTMLCanvasElement>document.getElementById('game');
    var context = canvas.getContext('2d');
    var grid = 16;
    var count = 0;
    var check:boolean;
    var snake = {
    x: 160,
    y: 160,
  
  // snake velocity. moves one grid length every frame in either the x or y direction
    dx: grid,
    dy: 0,
  
  // keep track of all grids the snake body occupies
    cells: [],
  
  // length of the snake. grows when eating an apple
    maxCells: 4
    };
    var apple = {
      x: 320,
      y: 320
    };
// get random whole numbers in a specific range
// @see https://stackoverflow.com/a/1527820/2124254
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
// game loop
    function loop() {
      countdown();
      requestAnimationFrame(loop);
// slow game loop to 15 fps instead of 60 (60/15 = 4)
      if(check==false){
        gameOver();
        return;
      }
      if(snake.maxCells == 14) {
        youwon();
        return;
      }
    if (++count < 4) {
      return;
    }
    count = 0;
    context.clearRect(0,0,canvas.width,canvas.height);
// move snake by it's velocity
    snake.x += snake.dx;
    snake.y += snake.dy;
// wrap snake position horizontally on edge of screen
    if (snake.x < 0) {
      snake.x = canvas.width - grid;
    }
    else if (snake.x >= canvas.width) {
      snake.x = 0;
    } 
// wrap snake position vertically on edge of screen
    if (snake.y < 0) {
      snake.y = canvas.height - grid;
    }
    else if (snake.y >= canvas.height) {
      snake.y = 0;
    }
// keep track of where snake has been. front of the array is always the head
    snake.cells.unshift({x: snake.x, y: snake.y});
// remove cells as we move away from them
    if (snake.cells.length > snake.maxCells) {
      snake.cells.pop();
    }
// draw apple
    context.fillStyle = 'red';
    context.fillRect(apple.x, apple.y, grid-1, grid-1);
// draw snake one cell at a time
    context.fillStyle = 'green';
    snake.cells.forEach(function(cell, index) {
// drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
    context.fillRect(cell.x, cell.y, grid-1, grid-1);  
// snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
// canvas is 400x400 which is 25x25 grids 
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }
// check collision with all cells after this one (modified bubble sort)
    for (var i = index + 1; i < snake.cells.length; i++) {
// snake occupies same space as a body part. reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
    }
  });
}
// listen to keyboard events to move the snake
document.addEventListener('contextmenu',event=> event.preventDefault());
document.addEventListener('keydown', function(e) {
  
// left arrow key
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
// up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
// right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
// down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  if(e.which === 116 || e.which === 82 || e.which === 17||e.which === 16||e.which === 73||e.which === 91||e.which === 122) {
   // e.keydown = 0;
    e.returnValue = false;
    return false;
  }
});
// start the game
requestAnimationFrame(loop);
function gameOver() {
    context.font = "20px Georgia";  
    context.fillText("Game Over!", 10, 90);
  }
function cheating() {
  context.font = "20px Georgia";  
  context.fillText("Cheating!", 10, 60);
  //check=false;
}
function youwon() {
  context.font = "20px Georgia";  
  context.fillText("YOU WON!!!", 10, 60);
  won=true;
    //check=false;
}

function timeUp() {
  context.font = "20px Georgia";  
  context.fillText("Time's Up!", 10, 60);
  check = false;
}
//timer
//set minutes 
var mins = 90; 

//calculate the seconds 
var secs = mins * 60; 
//countdown function is evoked when page is loaded 
function countdown() { 
    setTimeout(decrement =>{ 
      if (document.getElementById) { 
          minutes = document.getElementById("minutes"); 
          seconds = document.getElementById("seconds"); 
  
          //if less than a minute remaining 
          //Display only seconds value. 
          if (seconds < 59) { 
              seconds.value = secs; 
          } 
  
          //Display both minutes and seconds 
          //getminutes and getseconds is used to 
          //get minutes and seconds 
          else { 
              minutes.value = getminutes(); 
              seconds.value = getseconds(); 
          } 
          //when less than a minute remaining 
          //colour of the minutes and seconds 
          //changes to red 
          if (mins < 1) { 
              minutes.style.color = "red"; 
              seconds.style.color = "red"; 
          } 
          //if seconds becomes zero, 
          //then page alert time up 
          if (mins < 0) { 
              timeUp(); 
              minutes.value = 0; 
              seconds.value = 0; 
          } 
          //if seconds > 0 then seconds is decremented 
          else { 
              secs--; 
              setTimeout(decrement, 1000); 
          } 
      } 
  } , 60); 
} 



function getminutes() { 
    //minutes is seconds divided by 60, rounded down 
    mins = Math.floor(secs / 60); 
    return mins; 
  } 

function getseconds() { 
    //take minutes remaining (as seconds) away 
    //from total seconds remaining 
    return secs - Math.round(mins * 60); 
  } 
 if (window.performance) {
  console.info("window.performance works fine on this browser");
 }
  if (performance.navigation.type == 1) {
    //console.info( "This page is reloaded" );
    cheating();
    gameOver();
    check = false;
  }
}
submit(){
  alert("Round 1 Over");
  this.router.navigateByUrl('/rover');
}
}

