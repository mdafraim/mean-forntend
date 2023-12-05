import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post-list/post.model';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  
  
  enterTitle = '';
  enterContent = '';
  @Output() postCreated = new EventEmitter<Post>();
  
  onAddPost(form: NgForm){
    if(form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
  }
  
    constructor() { }
  ngOnInit(): void {
  }

}
