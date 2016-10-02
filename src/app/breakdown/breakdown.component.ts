import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../budget-item/BudgetItem'

@Component({
  selector: 'app-breakdown',
  templateUrl: './breakdown.component.html',
  styleUrls: ['./breakdown.component.css']
})
export class BreakdownComponent implements OnInit {

  categoryGroup: string = "Food";

  budgetItems: BudgetItem[] = [{category:"Groceries",budgeted: 300}, {category:"Eating Out", budgeted:200}]

  constructor() { }

  ngOnInit() {
  }

}
