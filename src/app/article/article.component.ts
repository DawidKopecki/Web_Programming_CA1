import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article:Article;

  constructor() { 
    this.article=new Article("Angular", "http://angular.io",10);
    

  }

  ngOnInit(): void {
  }

  voteUp(){
    this.article.votes++;
    return false;
  }

  voteDown(){
    this.article.votes--;
    return false;
  }
}
