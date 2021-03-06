import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from './BudgetItem'

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
export class BudgetItemComponent implements OnInit {

  @Input() budgetItem: BudgetItem;

  constructor() { }

  ngOnInit() {
  }

}
