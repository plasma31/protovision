import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from '../../event.service';
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
    number:new FormControl('',Validators.required),
    score:new FormControl('')
  });
  eventForm: any;
  constructor(private eveSer:EventService,private router:Router){}
  attended:any;
  ngOnInit() {    
    this.eveSer.getScore().subscribe(success => {
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
      console.log(this.loginForm.value.secondplayer);
      console.log(this.loginForm.value.email);
      console.log(this.loginForm.value.number);
      console.log(this.attended[i].data.firstplayer);
      console.log(this.attended[i].data.secondplayer);
      console.log(this.attended[i].data.email);
      console.log(this.attended[i].data.number);
      console.log(this.attended[i].data.score);
      if( this.loginForm.value.firstplayer===this.attended[i].data.firstplayer &&
          this.loginForm.value.email===this.attended[i].data.email &&
          this.loginForm.value.number===this.attended[i].data.number ){
            console.log(this.attended[i].id);
            console.log(this.loginForm.value);
            this.router.navigate(['/round2/question1'],{
              queryParams:{
                id: this.attended[i].id
              }
            });
            this.loginForm.reset();
            break;
        }else{
          alert("Invalid Details");
        }
      }
    }
}
