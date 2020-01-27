import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from '../../event.service';
import { NavigationExtras, Router } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    user: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    number: new FormControl(0,Validators.required),
    score: new FormControl("")
  });
  eventForm: any;
  currentuser: any;
  error: boolean;
  constructor(private eveSer:EventService,private router:Router){}
  attended:any;
  ngOnInit() {    
    this.eveSer.getAttended("Attended Protovision").subscribe(success => {
      this.attended = success;
      console.log(success);
      }, error => {
        console.log(error);
      });
    }
    submit() {
      let i;
      for (i = 0; i < this.attended.length; i++) {
        let user=this.attended[i].data.data;
        this.currentuser=user;
        console.log(this.currentuser.number);
        if(this.currentuser.username === this.loginForm.value.user && this.currentuser.number == this.loginForm.value.number) {
          this.router.navigate(["/round2/question1"], {
                  queryParams: {
                    id: this.attended[i].data.id
                  }
                });
                swal("Login Successful");
                this.loginForm.reset();
                break;
              } else {
                this.error = false;
                // break;
              }
          }
      } 
}
