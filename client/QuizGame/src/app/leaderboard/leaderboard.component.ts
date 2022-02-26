import { Component, OnInit } from '@angular/core';
import { ScoreCardService } from 'services/score-card.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  leaderBoard = [];
  constructor(private scoreCard: ScoreCardService) { }

  ngOnInit(): void {
    this.scoreCard.getQuizScore().subscribe(res => this.leaderBoard = res.sort((a, b) => {
      return b.quiz_score - a.quiz_score;
    }), err => console.log(err));
  }

}
