import {Component, OnInit, Input} from '@angular/core';
import { BudgetItem } from '../budget-item/BudgetItem'
import {CategoryGroup} from "../budget-item/CategoryGroup";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  toBeBudgeted: number = 0;

  categoryGroups: CategoryGroup[] = [
    /*{categoryGroup:"Housing", budgetItems:[
      {category:"Rent/Mortgage", budgeted: 1700},
      {category:"Maintenance", budgeted: 300}
    ]},
    {category:"Food", budgetItems:[
      {category:"Groceries", budgeted:300, subCategoryBudgetItems:[]},
      {category:"Eating Out", budgeted:200, subCategoryBudgetItems:[]}
    ]},
    {category:"Cars", budgeted:500, subCategoryBudgetItems:[
      {category:"Car Loan(s)", budgeted:300, subCategoryBudgetItems:[]},
      {category:"Gas", budgeted:100, subCategoryBudgetItems:[]},
      {category:"Car Insurance", budgeted:100, subCategoryBudgetItems:[]}
    ]}*/
    new CategoryGroup(
      "Housing", [
        {category:"Rent/Mortgage", budgeted: 1700},
        {category:"Maintenance", budgeted: 300}]
      )
    ]

  selectedCategoryGroup: CategoryGroup = this.categoryGroups[0];

  onClickCategoryGroup(categoryGroup:CategoryGroup) {
      console.log("clicked: ", categoryGroup);
      this.selectedCategoryGroup = categoryGroup;
  }

  onValueChange(categoryGroup:CategoryGroup, changedBy:number) {
    console.log("onvaluechange: ", changedBy);
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
      //this.budgetItems.push({category: "New", budgeted: 100, subCategoryBudgetItems:[]});
    }
  }

  constructor() {

  }

  ngOnInit() {
  }

}
