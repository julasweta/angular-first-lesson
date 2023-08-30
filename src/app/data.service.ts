import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from './interfaces/comment.interface';
import { IUser } from './interfaces/user.interface';
import { IPost } from './interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}


  getUsers(): Observable<IUser[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPostsByUserId(userId: number): Observable<IPost[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  getCommentsByPostId(postId: number): Observable<IComment[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }
}
