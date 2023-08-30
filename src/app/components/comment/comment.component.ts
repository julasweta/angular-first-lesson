import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/comment.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent {
  @Input()
  comment: IComment
}
