import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuickBudgetComponent } from './quick-budget/quick-budget.component';

import { routing } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { QBInputComponent } from './qbinput/qbinput.component';
import { BudgetComponent } from './budget/budget.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { BudgetItemComponent } from './budget-item/budget-item.component';
import { AdjustableNumberBadgeComponent } from './adjustable-number-badge/adjustable-number-badge.component'

@NgModule({
  declarations: [
    AppComponent,
    QuickBudgetComponent,
    HeaderComponent,
    QBInputComponent,
    BudgetComponent,
    BreakdownComponent,
    BudgetItemComponent,
    AdjustableNumberBadgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
