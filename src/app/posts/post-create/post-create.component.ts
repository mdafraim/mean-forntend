import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post-list/post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  
  
  enterTitle = '';
  enterContent = '';
  @Output() postCreated = new EventEmitter<Post>();
  
  onAddPost(){
    const post: Post = {
      title: this.enterTitle,
      content: this.enterContent
    };
    this.postCreated.emit(post);
  }
  
    constructor() { }
  ngOnInit(): void {
  }

}
