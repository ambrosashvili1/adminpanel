import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'users',
    component : UsersComponent
  },
  {
    path : 'posts',
    component : PostsComponent
  },
  {
    path : 'albums',
    component : AlbumsComponent
  },
  {
    path : 'comments',
    component : CommentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
