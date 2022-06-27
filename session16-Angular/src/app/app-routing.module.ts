import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { IndexComponent } from './pages/index/index.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UsersInfoComponent } from './pages/users-info/users-info.component';

const routes: Routes = [
  {path:"" , component : IndexComponent},
  {path:"contact" , component : ContactComponent},
  {path:"posts" , component : PostsComponent},
  {path:"register" , component : RegisterComponent},
  {path:"products" , component : ProductsComponent},
  {path:"users" , component : UserListComponent},
  {path:"showUsers" , component : UsersInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
