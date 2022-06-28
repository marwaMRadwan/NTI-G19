import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http" ;
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostsComponent } from './pages/posts/posts.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersInfoComponent } from './pages/users-info/users-info.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactComponent,
    PostsComponent,
    RegisterComponent,
    UserFormComponent,
    UserListComponent,
    NavbarComponent,
    CardComponent,
    ProductsComponent,
    UsersInfoComponent,
    SinglePostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
