import { Routes, RouterModule } from '@angular/router';
import { QuickBudgetComponent } from './quick-budget/quick-budget.component';

const appRoutes: Routes = [
  { path: '', component: QuickBudgetComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
