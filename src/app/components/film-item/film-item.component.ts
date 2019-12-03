import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StarWarsService } from 'src/app/services/starwars.service';
import { ApiResponse } from 'src/app/shared/api-response';
import { Store } from '@ngrx/store';

import {
    FetchFilmDetailsRequest,
    FetchFilmDetailsSuccess,
    FetchFilmDetailsFailure,
} from 'src/app/store/actions/film-details';

@Component({
    selector: 'app-film-item',
    templateUrl: './film-item.component.html',
    styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
    @Input() film;

    constructor(private starWarsService: StarWarsService, private store: Store<any>) { }

    ngOnInit() {

    }


    onClickTitle(film) {
        const me = this;

        me.starWarsService.getFilmDetails(film.episode_id).subscribe((response: ApiResponse) => {

            me.store.dispatch(new FetchFilmDetailsRequest());

            if (response) {
                me.store.dispatch(new FetchFilmDetailsSuccess(response));
            } else {
                me.store.dispatch(new FetchFilmDetailsFailure());
            }
        });
    }
}
