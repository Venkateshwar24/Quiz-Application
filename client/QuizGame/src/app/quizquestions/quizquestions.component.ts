import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'services/auth.service';
import { ScoreCardService } from 'services/score-card.service';
import { quizQuestions } from './../../../QuizMaterials/quizzes';
@Component({
  selector: 'app-quizquestions',
  templateUrl: './quizquestions.component.html',
  styleUrls: ['./quizquestions.component.css']
})
export class QuizquestionsComponent implements OnInit {

  scores = {
    user_name: '',
    quiz_score: 0
  }


  quiz = [];
  userName;
  userScore = 0;
  currQues;
  questionNumber = 1;
  optionSelected = false;
  total_questions: Number;
  loggedInUser;
  itemSelected: string;
  constructor(private authService: AuthService,
    private http: HttpClient,
    private scoreCard: ScoreCardService,
    private _route: Router) { }

  ngOnInit(): void {

    this.quiz = quizQuestions;
    this.getUser();
    this.total_questions = this.quiz.length;
    this.generateQuestions();
  }

  getUser() {
    const token = this.authService.getToken();
    this.http.get(`http://localhost:3000/users/${token}`)
      .subscribe(
        res => this.loggedInUser = res);
  }
  optionsForQuestion = [];
  generateQuestions() {
    this.optionSelected = false;
    this.currQues = this.quiz[Math.floor(Math.random() * this.quiz.length)];
    this.optionsForQuestion = this.currQues.options;
    this.optionsForQuestion = this.optionsForQuestion.sort(() => Math.random() - 0.5);
    this.quiz.forEach((element, i) => {
      if (element.question == this.currQues.question)
        this.quiz.splice(i, 1);

    });
  }


  checkAnswer(selectedAnswer, answer, event) {
    this.optionSelected = true;
    this.itemSelected = event;

    setTimeout(() => {
      if (selectedAnswer === answer)
        this.userScore = this.userScore + 10;
      if (this.questionNumber != this.total_questions) {
        this.generateQuestions();
        this.questionNumber += 1;
      }
    }, 1500);

  }


  colorChange(option, answer) {
    if (this.optionSelected) {
      if (option === answer)
        return '#5cb85c';
      else if (option != answer && this.itemSelected == option)
        return '#d9534f';
    }
    return null;

  }
  onQuizSubmit() {
    this.userName = this.loggedInUser.user_name;
    this.scores.user_name = this.loggedInUser.user_name
    this.scores.quiz_score = this.userScore
    this.scoreCard.postQuizScore(this.scores).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)


    )
  }

  restartQuiz() {
    window.location.reload();
  }

  viewLeaderBoard() {
    this._route.navigate(['/leaderboard']);
  }

}
