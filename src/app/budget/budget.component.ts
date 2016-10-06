import {Component, OnInit, Input} from '@angular/core';
import { BudgetItem } from '../budget-item/BudgetItem'

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  toBeBudgeted: number = 0;

  budgetItems: BudgetItem[] = [
    {category:"Housing", budgeted: 2000, subCategoryBudgetItems:[
      {category:"Rent/Mortgage", budgeted: 1700, subCategoryBudgetItems:[]},
      {category:"Maintenance", budgeted: 300, subCategoryBudgetItems:[]}
    ]},
    {category:"Food", budgeted:500, subCategoryBudgetItems:[
      {category:"Groceries", budgeted:300, subCategoryBudgetItems:[]},
      {category:"Eating Out", budgeted:200, subCategoryBudgetItems:[]}
    ]},
    {category:"Cars", budgeted:500, subCategoryBudgetItems:[
      {category:"Car Loan(s)", budgeted:300, subCategoryBudgetItems:[]},
      {category:"Gas", budgeted:100, subCategoryBudgetItems:[]},
      {category:"Car Insurance", budgeted:100, subCategoryBudgetItems:[]}
    ]}
    ]

  selectedBudgetItem: BudgetItem = this.budgetItems[0];

  onClickBudgetItem(budgetItem:BudgetItem) {
      console.log("clicked: ", budgetItem);
      this.selectedBudgetItem = budgetItem;
  }

  onValueChange(budgetItem:BudgetItem, changedBy:number) {
    console.log("onvaluechange: ", changedBy);
    budgetItem.budgeted += changedBy;
    this.toBeBudgeted -= changedBy;
  }

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
