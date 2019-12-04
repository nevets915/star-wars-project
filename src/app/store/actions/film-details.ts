import { Action } from '@ngrx/store';

export enum FilmDetailsActionTypes {
    FETCH_FILM_DETAILS_REQUEST = 'FETCH_FILM_DETAILS_REQUEST',
    FETCH_FILM_DETAILS_SUCCESS = 'FETCH_FILM_DETAILS_SUCCESS',
    FETCH_FILM_DETAILS_FAILURE = 'FETCH_FILM_DETAILS_FAILURE',
}

export class FetchFilmDetailsRequest implements Action {
    readonly type = FilmDetailsActionTypes.FETCH_FILM_DETAILS_REQUEST;
}

export class FetchFilmDetailsSuccess implements Action {
    readonly type = FilmDetailsActionTypes.FETCH_FILM_DETAILS_SUCCESS;
    constructor(public payload: any) { }
}

export class FetchFilmDetailsFailure implements Action {
    readonly type = FilmDetailsActionTypes.FETCH_FILM_DETAILS_FAILURE;
}

export type FilmDetailsActions
    = FetchFilmDetailsRequest
    | FetchFilmDetailsSuccess
    | FetchFilmDetailsFailure;
