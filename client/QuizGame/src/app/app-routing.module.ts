import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'services/auth.guard';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { QuizDashboardComponent } from './quiz-dashboard/quiz-dashboard.component';
import { QuizquestionsComponent } from './quizquestions/quizquestions.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:QuizDashboardComponent

  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'quiz',
    component:QuizquestionsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'leaderboard',
    component:LeaderboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
