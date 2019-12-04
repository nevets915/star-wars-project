import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule, ActionReducer } from "@ngrx/store";
import { storeLogger, LoggerOptions } from 'ngrx-store-logger';
import { filmListReducer } from './store/reducers/film-list';
import { filmDetailsReducer } from './store/reducers/film-details';

import { AboutComponent } from './components/pages/about/about.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmFilterComponent } from './components/film-filter/film-filter.component';

/* Directive */
export function logger(reducer: ActionReducer<any>): any {
    const options: LoggerOptions = {
        collapsed: true,
        timestamp: false,
        duration: false,
    };
    return storeLogger(options)(reducer);
}

export const metaReducers = [logger];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AboutComponent,
        FilmListComponent,
        FilmItemComponent,
        FilmDetailsComponent,
        FilmFilterComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        StoreModule.forRoot({
            filmList: filmListReducer,
            filmDetails: filmDetailsReducer
        }, {
            metaReducers
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
