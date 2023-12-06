import { Injectable } from '@angular/core';
import { Post } from './post-list/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor() { }

  private posts: Post[] = []
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts]
  }
  getPostUpdatedListener(){
    return this.postsUpdated.asObservable();
  }

  addPosts(title:string, content:string) {
    const post: Post = {title: title, content: content}
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

}
