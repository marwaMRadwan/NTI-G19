import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ErrorComponent } from './pages/error/error.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:"" , component:IndexComponent},
  {path:"login" , component:LoginComponent},
  {path:"gallery" , component:GalleryComponent},
  {path:"edit-profile" , component:EditProfileComponent},
  {path:"**" , component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
