import {Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';

@Component({
  selector: 'app-quick-budget',
  templateUrl: './quick-budget.component.html',
  styleUrls: ['./quick-budget.component.css']
})
export class QuickBudgetComponent implements OnInit {

  theFamilySize: number;

  handleOnClickFamilyEvent(arg : number) {
    console.log("HANDLE EVENT: ", arg);
    this.theFamilySize = arg;
  }

  constructor() { }

  ngOnInit() {
  }

}
