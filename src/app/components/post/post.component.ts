import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  @Input()
  post: IPost
}
