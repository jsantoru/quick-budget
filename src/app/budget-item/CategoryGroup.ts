import {BudgetItem} from "./BudgetItem";
export class CategoryGroup {
  name: string;
  budgetItems: BudgetItem[];

  constructor(name:string, budgetItems: BudgetItem[]) {
    this.name = name;
    this.budgetItems = budgetItems;
  }

  get budgeted() {
    let budgeted:number = 0;
    this.budgetItems.forEach(function(budgetItem:BudgetItem) {
      budgeted += budgetItem.budgeted;
    });

    return budgeted;
  }
}
