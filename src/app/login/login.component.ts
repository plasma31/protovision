import { CONTROLS } from './../round1/question7/constants';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EventService } from "../event.service";
import { NavigationExtras, Router } from "@angular/router";
import swal from 'sweetalert';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
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
  error: boolean;
  currentuser:any;
  constructor(private eveSer: EventService, private router: Router) {}
  attended: any;
  ngOnInit() {
    this.eveSer.getAttended("Attended Protovision").subscribe(
      success => {
        this.attended = success;
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  }
  submit() {
    let i;
    for (i = 0; i < this.attended.length; i++) {
      let user=this.attended[i].data.data;
      this.currentuser=user;
      console.log(this.currentuser.number);
      if(this.currentuser.username === this.loginForm.value.user && this.currentuser.number == this.loginForm.value.number) {
        
              var score: number = 0;
              this.loginForm.controls["score"].setValue(score);
              console.log(this.attended[i].data.id);
              this.eveSer.setScoreDetails(this.attended[i].data.id, this.loginForm.value).then(success=>{
                console.log(success);
              }).catch(error=>{console.log(error)});
              swal("Login Successful");
              this.router.navigate(["/round1/rules"], {
                queryParams: {
                  id: this.attended[i].data.id
                }
              });
              this.loginForm.reset();
              break;
            } else {
              this.error = false;
              // break;
            }
      }
      // console.log(this.currentuser);
      // break;
    //   if (this.loginForm.value.user === user.data.name && this.loginForm.value.number === user.data.number) {
    //     this.router.navigate(["/round1/rules"], {
    //       queryParams: {
    //         id: this.attended[i].id
    //       }
    //     });
    //     var score: number = 0;
    //     this.loginForm.controls["score"].setValue(score);
    //     this.eveSer.setScore(this.attended[i].id, this.loginForm.value);
    //     this.loginForm.reset();
    //     break;
    //   } else {
    //     this.error = false;
    //   }
    // }
    // if (this.error == false) {
    //   alert("Invalid Details");
    // }
  }
}