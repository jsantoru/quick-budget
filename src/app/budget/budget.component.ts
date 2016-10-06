import {Component, OnInit, Input} from '@angular/core';
import { BudgetItem } from '../budget-item/BudgetItem'
import {CategoryGroup} from "../budget-item/CategoryGroup";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  theMonthlyIncome: number;
  theFamilySize: number;

  categoryGroups: CategoryGroup[];
  selectedCategoryGroup: CategoryGroup;

  onClickCategoryGroup(categoryGroup:CategoryGroup) {
      console.log("clicked: ", categoryGroup);
      this.selectedCategoryGroup = categoryGroup;
  }

  get totalBudgeted(): number {
    let totalBudgeted:number = 0;
    this.categoryGroups.forEach(function(categoryGroup:CategoryGroup) {
      totalBudgeted += categoryGroup.budgeted;
    });

    return totalBudgeted;
  }

  get toBeBudgeted() : number {
    return this.theMonthlyIncome - this.totalBudgeted;
  }

  @Input()
  set familySize(familySize:number) {
    if(familySize) {
      console.log("BudgetComponent: ", familySize);
      this.theFamilySize = familySize;
    }
  }

  @Input()
  set monthlyIncome(monthlyIncome:number) {
    if(monthlyIncome) {
      console.log("BudgetComponent: ", monthlyIncome);
      this.theMonthlyIncome = monthlyIncome;
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.categoryGroups = [
      new CategoryGroup(
        "Housing", [
          {category:"Rent/Mortgage", budgeted: 1700},
          {category:"Maintenance", budgeted: 300}]
      ),
      new CategoryGroup(
        "Food", [
          {category:"Groceries", budgeted: 300},
          {category:"Eating Out", budgeted: 200}]
      ),
      new CategoryGroup(
        "Cars", [
          {category:"Car Loan(s)", budgeted: 300},
          {category:"Gas", budgeted: 100},
          {category:"Car Insurance", budgeted: 100}]
      )
    ];

    this.selectedCategoryGroup = this.categoryGroups[0];
  }
}
