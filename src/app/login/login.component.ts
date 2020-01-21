import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    firstplayer: new FormControl('',[Validators.required,Validators.minLength(3)]),
    secondplayer:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.pattern('.+\@.+\..+')]),
    number:new FormControl(0,Validators.required),
    score:new FormControl('')
  });
  eventForm: any;
  error: boolean;
  constructor(private eveSer:EventService,private router:Router){}
  attended:any;
  ngOnInit() {    
    this.eveSer.getAttended('Attended Protovision').subscribe(success => {
      this.attended = success;
      console.log(success);
      }, error => {
        console.log(error);
      });
    }
  submit(){
    let i;
    for(i=0;i<this.attended.length;i++){
      console.log(this.loginForm.value.firstplayer);
      console.log(this.loginForm.value.email);
      console.log(this.loginForm.value.number);
      console.log(this.attended[i].data.name);
      console.log(this.attended[i].data.email);
      console.log(this.attended[i].data.number);
      if( this.loginForm.value.firstplayer===this.attended[i].data.name &&
          this.loginForm.value.email===this.attended[i].data.email &&
          this.loginForm.value.number===this.attended[i].data.number ){
            console.log(this.attended[i].id);
            console.log(this.loginForm.value);
            this.router.navigate(['/round1/rules'],{
              queryParams:{
                id: this.attended[i].id
              }
            });
            var score:number=0;
            this.loginForm.controls['score'].setValue(score);
            this.eveSer.setScore(this.attended[i].id,this.loginForm.value);
            this.loginForm.reset();
            break;
        }else{
          this.error=false;  
        }
      }
      if(this.error==false){
        alert("Invalid Details");
      }
    }
}
