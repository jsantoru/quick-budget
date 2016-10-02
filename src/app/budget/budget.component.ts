import {Component, OnInit, Input} from '@angular/core';
import { BudgetItem } from '../budget-item/BudgetItem'

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  toBeBudgeted: number = 0;

  // TODO: these should contain the list of 'breakdowns'
  budgetItems: BudgetItem[] = [
    {category:"Housing", budgeted: 2000, subCategoryBudgetItems:[]},
    {category:"Food", budgeted:500, subCategoryBudgetItems:[
      {category:"Groceries", budgeted:300, subCategoryBudgetItems:[]},
      {category:"Eating Out", budgeted:200, subCategoryBudgetItems:[]}
    ]},
    {category:"Cars", budgeted:500, subCategoryBudgetItems:[]}
    ]

  onClickBudgeted(budgetItem:BudgetItem, direction:string) {
    let changeAmount: number = 100
    if(direction == "up") {
      budgetItem.budgeted += changeAmount;
      this.toBeBudgeted -= changeAmount;
    } else if(direction == "down") {
      budgetItem.budgeted -= changeAmount;
      this.toBeBudgeted += changeAmount;
    } else {
      alert("BADNESS");
    }
  }

  @Input()
  set familySize(arg:number) {
    if(arg) {
      console.log("BudgetComponent: ", arg);
      this.budgetItems.push({category: "New", budgeted: 100, subCategoryBudgetItems:[]});
    }
  }

  constructor() {

  }

  ngOnInit() {
  }

}
