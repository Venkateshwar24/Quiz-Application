import { Component, OnInit } from '@angular/core';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-quiz-dashboard',
  templateUrl: './quiz-dashboard.component.html',
  styleUrls: ['./quiz-dashboard.component.css']
})
export class QuizDashboardComponent implements OnInit {
  
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }



  
}
