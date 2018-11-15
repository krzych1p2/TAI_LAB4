import {Component, OnInit} from '@angular/core';
import {ArticlesService} from "../../articles.service";	import {PostServiceService} from "../../services/post-service.service";
import {Router} from "@angular/router";	import {Post} from "../../classes/post";
import {Image} from "../../classes/image";
import {ActivatedRoute, Router} from "@angular/router";
@Component({	@Component({
    selector: 'app-blog-item-detail',	  selector: 'app-blog-item-detail',
    templateUrl: './blog-item-detail.component.html',	  templateUrl: './blog-item-detail.component.html',
    styleUrls: ['./blog-item-detail.component.css']	  styleUrls: ['./blog-item-detail.component.css']
  })	})
export class BlogItemDetailComponent implements OnInit {	export class BlogItemDetailComponent implements OnInit {
  article:object;	  article:Post;
  articlesService:ArticlesService;	  image: Image;
  constructor(articlesService:ArticlesService) {	  route:ActivatedRoute
    this.articlesService=articlesService;	  router:Router;
    postService:PostServiceService;
    constructor(postService:PostServiceService, router:Router, route:ActivatedRoute) {
      this.postService=postService;
      this.router=router;
      this.route=route;
    }	  }
  ngOnInit() {	  ngOnInit() {
    this.article=this.articlesService.getArticle(parseInt(window.location.href.substr(window.location.href.lastIndexOf('/') + 1)));	    this.postService.getOne(this.route.snapshot.paramMap.get("id")).subscribe(val=>{
      this.article=val;
    });
    this.postService.getImage(this.route.snapshot.paramMap.get("id")).subscribe(val=>{
      this.image=val;
    });
  }	  }
}	}
