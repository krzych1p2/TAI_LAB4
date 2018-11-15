import {Component, EventEmitter, OnInit, Output,} from '@angular/core';
import {Router} from "@angular/router";	import {Router} from "@angular/router";
import {ArticlesService} from "../../articles.service";	import {PostServiceService} from "../../services/post-service.service";
import {Post} from "../../classes/post";
import {Image} from "../../classes/image";
@Component({	@Component({
    selector: 'app-blog',	  selector: 'app-blog',
    @@ -9,18 +11,21 @@ import {ArticlesService} from "../../articles.service";
})	})
export class BlogComponent implements OnInit {	export class BlogComponent implements OnInit {
  @Output('getArticles') getArticles=new EventEmitter<object>();	  @Output('getArticles') getArticles=new EventEmitter<object>();
  public theBoundCallback: Function;	  public title:string;
  articles$:object;	  articles$:Post[];
  images$:Image[];
  router: Router;	  router: Router;
  articlesService:ArticlesService;	  postService:PostServiceService;
  constructor(router: Router,articlesService:ArticlesService) {	  constructor(router: Router,postService: PostServiceService) {
    this.router=router;	    this.router=router;
    this.articlesService=articlesService;	    this.postService=postService;
  }	  }
  ngOnInit() {	  ngOnInit() {
    this.articles$=this.articlesService.getAllArticles();	    this.postService.getAll().subscribe(res=>{
      this.articles$=res;
    })
    this.getArticles.emit(this.articles$);	    this.getArticles.emit(this.articles$);
  }	  }
