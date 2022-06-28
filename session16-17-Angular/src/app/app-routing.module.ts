import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UsersInfoComponent } from './pages/users-info/users-info.component';

const routes: Routes = [
  {path:"" , component : IndexComponent},
  {path:"contact" , component : ContactComponent},

  // {path:"posts" , component : PostsComponent},
  // {path:"posts/:id" , component : SinglePostComponent},

  {path:"posts" , children:[
    // localhost:4200/posts
    {path:"" , component : PostsComponent },
    // localhost:4200/posts/2
    {path : ":postId" , component:SinglePostComponent },
    // localhost:4200/posts/single-post
    {path : "single-post" , component:SinglePostComponent },
  ]},
  {path:"register" , component : RegisterComponent},
  {path:"products" , component : ProductsComponent},
  {path:"users" , component : UserListComponent},
  {path:"showUsers" , component : UsersInfoComponent},
  {path:"login" , component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
