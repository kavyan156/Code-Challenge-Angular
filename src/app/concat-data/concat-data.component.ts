import { Component, OnInit } from '@angular/core';
import { HelperService } from '../shared/helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-concat-data',
  templateUrl: './concat-data.component.html',
  styleUrls: ['./concat-data.component.css']
})
export class ConcatDataComponent implements OnInit {

  posts: any = [];
  private postsSub: Subscription;
  private result;
  private graphQLdata = [] ;
  constructor(private service: HelperService) { }

  ngOnInit() {
    this.service.getPosts();
    this.postsSub = this.service.getPostUpdateListener()
    .subscribe((posts: any) => {
      this.posts = posts;
    });

    this.result  = this.service.getGraphQL().subscribe((data) => {
      this.graphQLdata = data;
    });
  }

}
