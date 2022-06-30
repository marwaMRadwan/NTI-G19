import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProvidersComponent } from './pages/providers/providers.component';

const routes: Routes = [
  {path:"gallery" , component:GalleryComponent},
  {path:"providers" , component:ProvidersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
