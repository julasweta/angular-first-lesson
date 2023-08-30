import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../data.service';
import { IComment } from 'src/app/interfaces/comment.interface';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {
  comments: IComment[]
  comment: IComment

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const postId = +params['id']; // Перетворюємо в число
      this.dataService.getCommentsByPostId(postId).subscribe(comments => {
        this.comments = comments
      });
    });
  }


}
