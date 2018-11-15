import {Component, Input, OnInit} from '@angular/core';
import {PostServiceService} from "../../services/post-service.service";
import {Post} from "../../classes/post";
import {Image} from "../../classes/image";
@Component({	@Component({
    selector: 'app-blog-item',	  selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',	  templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.css']	  styleUrls: ['./blog-item.component.css']
  })	})
export class BlogItemComponent implements OnInit {	export class BlogItemComponent implements OnInit {
  @Input()article:object;	  @Input()article:Post;
  @Input()id:number;	  image:Image;
  constructor() { }	  postService: PostServiceService;
  constructor(postService: PostServiceService) {
    this.postService=postService;
  }
  ngOnInit() {	  ngOnInit() {
    console.log(this.image);
    this.postService.getImage(this.article.id).subscribe(res=>{
      this.image=res.thumbnailUrl;
    })
  }	  }
}	}
