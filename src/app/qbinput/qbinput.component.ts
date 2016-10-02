import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-qbinput',
  templateUrl: './qbinput.component.html',
  styleUrls: ['./qbinput.component.css']
})
export class QBInputComponent implements OnInit {

  familySize: number = 2;
  monthlyIncome: number = 5000;

  @Output() onClickFamilyEvent: EventEmitter<number> = new EventEmitter();

  onClickFamily(direction:string) {
    if(direction == "up") {
      this.familySize++;
    } else if(direction == "down") {
      this.familySize--;
    } else {
      alert("BADNESS");
    }

    console.log("sending event: ", this.familySize);
    //this.onClickFamilyEvent.next(this.familySize);
    this.onClickFamilyEvent.emit(this.familySize);
  }

  onClickIncome(direction:string) {
    if(direction == "up") {
      this.monthlyIncome += 100;
    } else if(direction == "down") {
      this.monthlyIncome -= 100;
    } else {
      alert("BADNESS");
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
