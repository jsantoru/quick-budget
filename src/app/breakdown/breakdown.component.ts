import {Component, OnInit, Input} from '@angular/core';
import { BudgetItem } from '../budget-item/BudgetItem'
import {CategoryGroup} from "../budget-item/CategoryGroup";

@Component({
  selector: 'app-breakdown',
  templateUrl: './breakdown.component.html',
  styleUrls: ['./breakdown.component.css']
})
export class BreakdownComponent implements OnInit {

  @Input()
  categoryGroup: CategoryGroup;

  onValueChange(budgetItem:BudgetItem, changedByValue:number) {
    console.log("onvaluechange: ", changedByValue);
    budgetItem.budgeted += changedByValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
