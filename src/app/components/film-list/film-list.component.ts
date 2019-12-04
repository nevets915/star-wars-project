import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StarWarsService } from 'src/app/services/starwars.service';
import { ApiResponse } from 'src/app/shared/api-response';

import {
    FetchFilmsRequest,
    FetchFilmsSuccess,
    FetchFilmsFailure,
} from 'src/app/store/actions/film-list';

@Component({
    selector: 'app-film-list',
    templateUrl: './film-list.component.html',
    styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
    public films: Array<any>;

    constructor(private starWarsService: StarWarsService, private store: Store<any>) { }

    ngOnInit() {
        const me = this;

        me.starWarsService.getFilms().subscribe((response: any) => {
            me.store.dispatch(new FetchFilmsRequest());

            if (response.results) {
                me.films = response.results;
                me.store.dispatch(new FetchFilmsSuccess(response.results));
            } else {
                me.store.dispatch(new FetchFilmsFailure());
            }
        });
    }

    filter(searchItem): void {
        this.store.select('filmList').subscribe((
            state => this.films = state.films
        ));

        this.films = this.films.filter(film => {
            return film.title.includes(searchItem);
        });
    }
}
