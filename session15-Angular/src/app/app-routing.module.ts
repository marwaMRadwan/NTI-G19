import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IndexComponent } from './pages/index/index.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';

const routes: Routes = [
  {path:"" , component : IndexComponent} , 
  {path:"about" , component:AboutComponent} ,
  {path:"contact" , component:ContactComponent},
  {path:"posts" , component:PostsComponent},
  {path :"posts/:postId" , component : SinglePostComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
