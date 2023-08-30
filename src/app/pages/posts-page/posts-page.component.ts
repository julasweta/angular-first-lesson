import { IPost } from 'src/app/interfaces/post.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
})
export class PostsPageComponent implements OnInit {

   posts: IPost[]=[]
   post: IPost;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = +params['userId']; // Перетворюємо в число
      this.dataService.getPostsByUserId(userId).subscribe(posts => {
        this.posts = posts;
      });
    });
  }

}
