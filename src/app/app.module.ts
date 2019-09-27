import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatTabsModule,
  MatTableModule
} from '@angular/material';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './todos/post-list/post-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { GraphQLModule } from '../app/user-list/graphql.module';
import { AppRoutingModule } from './app-routing.module';
import { HelperService } from './shared/helper.service';
import { ConcatDataComponent } from './concat-data/concat-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    UserListComponent,
    ConcatDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    GraphQLModule,
    AppRoutingModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule {}
