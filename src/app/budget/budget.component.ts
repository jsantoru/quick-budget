import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../budget-item/BudgetItem'

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  toBeBudgeted: number = 0;

  budgetItems: BudgetItem[] = [
    {category:"Housing",budgeted: 2000},
    {category:"Food", budgeted:500},
    {category:"Cars", budgeted:500}
    ]

  onClickBudgeted(budgetItem:BudgetItem, direction:string) {
    if(direction == "up") {
      budgetItem.budgeted += 100;
      this.toBeBudgeted -= 100;
    } else if(direction == "down") {
      budgetItem.budgeted -= 100;
      this.toBeBudgeted += 100;
    } else {
      alert("BADNESS");
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
