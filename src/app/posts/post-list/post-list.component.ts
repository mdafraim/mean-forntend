import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post  } from './post.model'
import { PostService } from '../post.service';
import { Subscription  } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{

  // posts = [
  //   { title: "First Post", content: "This is a first post's content" },
  //   { title: "Second Post", content: "This is a second post's content" },
  //   { title: "Third Post", content: "This is a third post's content" }
  // ]

 posts:Post[] = []
 private postsSub!: Subscription;

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdatedListener()
    .subscribe((posts: Post[]) => {
         this.posts = posts;
    });
  }
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

}
