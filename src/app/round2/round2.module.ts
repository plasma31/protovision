import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { GameoverComponent } from './gameover/gameover.component';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
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
    path: 'gameover',
    component:GameoverComponent
  },
  { path: '**', redirectTo: 'login' }

]


@NgModule({
  declarations: [Question1Component, Question2Component, Question3Component, Question4Component, Question5Component, LoginComponent, GameoverComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class Round2Module { }
