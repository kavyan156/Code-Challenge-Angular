import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Post, Query } from '../user-list/shared/all-users.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelperService{

  private posts: any = [];
  private concatedData = [];
  public result;
  private postsUpdated = new Subject<Post[]>();
  allUsers: Observable<Post[]>;

  constructor(private http: HttpClient, private apollo: Apollo) {
    console.log('sdsa');


  }

  getGraphQL() {
    return this.posts = this.apollo.watchQuery<Query>({
      query: gql`
      query {
        allUsers {
          id
          email
          name
        }
      }
      `,
    })
    .valueChanges
    .pipe(
      map(result => result.data.allUsers)
    );
  }

  getPosts() {
    this.http.get('http://localhost:3000/getAPIResponse').subscribe((postData) => {
      console.log(postData);

      this.posts = postData ;
      this.postsUpdated.next([...this.posts]);

    });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
}
