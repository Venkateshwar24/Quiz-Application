import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreCardService {

  constructor(private http:HttpClient) { }

  postQuizScore(score)
  {
   return this.http.post<any>("http://localhost:3000/scorecard",score);
  }

  getQuizScore()
  {
    return this.http.get<any>("http://localhost:3000/scorecard");
  }
}
