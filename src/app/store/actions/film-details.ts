import { Action } from '@ngrx/store';

export enum FilmDetailsActionTypes {
    FETCH_FILMS_REQUEST = 'FETCH_FILMS_REQUEST',
    FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS',
    FETCH_FILMS_FAILURE = 'FETCH_FILMS_FAILURE',
}

export class FetchFilmDetailsRequest implements Action {
    readonly type = FilmDetailsActionTypes.FETCH_FILMS_REQUEST;
}

export class FetchFilmDetailsSuccess implements Action {
    readonly type = FilmDetailsActionTypes.FETCH_FILMS_SUCCESS;
    constructor(public payload: any) { }
}

export class FetchFilmDetailsFailure implements Action {
    readonly type = FilmDetailsActionTypes.FETCH_FILMS_FAILURE;
}

export type FilmDetailsActions
    = FetchFilmDetailsRequest
    | FetchFilmDetailsSuccess
    | FetchFilmDetailsFailure;
