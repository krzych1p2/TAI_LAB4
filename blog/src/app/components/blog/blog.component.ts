import {Component, EventEmitter, OnInit, Output,} from '@angular/core';
import {Router} from "@angular/router";
import {ArticlesService} from "../../articles.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Output('getArticles') getArticles=new EventEmitter<object>();
  public theBoundCallback: Function;
  articles$:object;
  router: Router;
  articlesService:ArticlesService;

  constructor(router: Router,articlesService:ArticlesService) {
    this.router=router;
    this.articlesService=articlesService;
  }

  ngOnInit() {
    this.articles$=this.articlesService.getAllArticles();
    this.getArticles.emit(this.articles$);
  }

}
