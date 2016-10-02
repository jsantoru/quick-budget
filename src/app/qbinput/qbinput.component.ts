import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qbinput',
  templateUrl: './qbinput.component.html',
  styleUrls: ['./qbinput.component.css']
})
export class QBInputComponent implements OnInit {

  familySize: number = 2;
  monthlyIncome: number = 5000;

  onClickFamily(direction:string) {
    if(direction == "up") {
      this.familySize++;
    } else if(direction == "down") {
      this.familySize--;
    } else {
      alert("BADNESS");
    }
  }

  onClickIncome(direction:string) {
    if(direction == "up") {
      this.monthlyIncome = this.monthlyIncome + 100;
    } else if(direction == "down") {
      this.monthlyIncome = this.monthlyIncome - 100;
    } else {
      alert("BADNESS");
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
