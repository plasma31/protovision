import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.css']
})
export class RoverComponent implements OnInit {

  constructor(private router:Router,private actRoute:ActivatedRoute) { }
  id:any;
  ngOnInit() {
    this.actRoute.queryParams.subscribe(params => {
      console.log(params);
      let obj:any = params;
      this.id=params.id;
    });
  }
  Submit(){    
    this.router.navigate(["/round2/question1"], {
      queryParams: {
        id: this.id
      }
    });
  }
}
