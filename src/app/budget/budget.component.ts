import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../budget-item/BudgetItem'

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  budgetItems: BudgetItem[] = [
    {category:"Housing",budgeted: 2000},
    {category:"Food", budgeted:500},
    {category:"Cars", budgeted:500}
    ]

  constructor() { }

  ngOnInit() {
  }

}
