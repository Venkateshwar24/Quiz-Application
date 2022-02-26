import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from 'services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from 'services/token-interceptor.service';
import { LoginComponent } from './login/login.component';
import { QuizDashboardComponent } from './quiz-dashboard/quiz-dashboard.component';
import { QuizquestionsComponent } from './quizquestions/quizquestions.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    QuizDashboardComponent,
    QuizquestionsComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [AuthService,TokenInterceptorService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi:true
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, 
      useValue: {duration: 1000}
    }
  ],
  bootstrap: [AppComponent]
  
    
})
export class AppModule { }
