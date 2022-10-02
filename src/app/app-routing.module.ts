import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "RickAndMorty", component: RickAndMortyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
