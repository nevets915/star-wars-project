import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

const routes: Routes = [
    { path: '', component: FilmListComponent },
    { path: 'about', component: AboutComponent },
    { path: 'details', component: FilmDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }