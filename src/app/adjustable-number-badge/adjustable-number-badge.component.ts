import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-adjustable-number-badge',
  templateUrl: './adjustable-number-badge.component.html',
  styleUrls: ['./adjustable-number-badge.component.css']
})
export class AdjustableNumberBadgeComponent implements OnInit {

  @Input()
  value : number;

  @Input()
  adjustByValue : number;

  @Output()
  valueChangedByEvent: EventEmitter<number> = new EventEmitter<number>();

  onClick(direction: string) {
    if(direction == "up") {
      this.value += this.adjustByValue;
      this.valueChangedByEvent.emit(this.adjustByValue);
    } else if(direction == "down") {
      this.value -= this.adjustByValue;
      this.valueChangedByEvent.emit(-this.adjustByValue);
    } else {
      alert("BADNESS");
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
