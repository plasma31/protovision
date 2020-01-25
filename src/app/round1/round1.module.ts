import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { Question6Component } from './question6/question6.component';
import { Question7Component } from './question7/question7.component';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { RulesComponent } from './rules/rules.component';
import { BestScoreManager } from './round1.service';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [
  {
    path: 'rules',
    component:RulesComponent
  },
  {
    path: 'question1',
    component:Question1Component
  },
  {
    path: 'question2',
    component:Question2Component
  },
  {
    path: 'question3',
    component:Question3Component
  },
  {
    path: 'question4',
    component:Question4Component
  },
  {
    path: 'question5',
    component:Question5Component
  },
  {
    path: 'question6',
    component:Question6Component
  },
  {
    path: 'question7',
    component:Question7Component
  },
  { path: '**', redirectTo: 'question1' }
]
@NgModule({
  declarations: [Question1Component, Question2Component, Question3Component, Question4Component, Question5Component, Question6Component, Question7Component, RulesComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)

  ],  providers: [
    BestScoreManager
  ],
})
export class Round1Module { }
