export interface BudgetItem {
  category: string;
  budgeted: number;

  subCategoryBudgetItems: BudgetItem[];
}
