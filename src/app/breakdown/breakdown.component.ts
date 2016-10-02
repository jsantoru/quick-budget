import {Component, OnInit, Input} from '@angular/core';
import { BudgetItem } from '../budget-item/BudgetItem'

@Component({
  selector: 'app-breakdown',
  templateUrl: './breakdown.component.html',
  styleUrls: ['./breakdown.component.css']
})
export class BreakdownComponent implements OnInit {

  @Input()
  categoryGroup: string;

  @Input()
  budgetItems: BudgetItem[];

  constructor() { }

  ngOnInit() {
  }

}
