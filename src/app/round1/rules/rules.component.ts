import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-rules",
  templateUrl: "./rules.component.html",
  styleUrls: ["./rules.component.css"]
})
export class RulesComponent implements OnInit {
  constructor(private router: Router, private actRoute: ActivatedRoute) {}
  id: any;
  ngOnInit() {
    this.actRoute.queryParams.subscribe(params => {
      console.log(params);
      let obj: any = params;
      this.id = params.id;
    });
    if (this.id) {
      console.log(this.id);
    }
  }
  Submit() {
    this.router.navigate(["/round1/question1"], {
      queryParams: {
        id: this.id
      }
    });
  }
}
