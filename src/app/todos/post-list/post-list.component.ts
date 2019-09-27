import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/shared/helper.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: any = [];
  private postsSub: Subscription;
  constructor(public service: HelperService) {}

  ngOnInit() {
    this.service.getPosts();
    this.postsSub = this.service.getPostUpdateListener()
      .subscribe((posts: any) => {
        this.posts.push(posts);
        console.log(this.posts);
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
