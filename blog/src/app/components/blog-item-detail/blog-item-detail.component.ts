import {Component, Input, OnInit} from '@angular/core';
import {ArticlesService} from "../../articles.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {
  article:object;
  articlesService:ArticlesService;
  constructor(articlesService:ArticlesService) {
    this.articlesService=articlesService;
  }

  ngOnInit() {
    this.article=this.articlesService.getArticle(parseInt(window.location.href.substr(window.location.href.lastIndexOf('/') + 1)));
  }

}
