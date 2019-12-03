import { Action } from '@ngrx/store';

export enum FilmListActionTypes {
    FETCH_FILMS_REQUEST = 'FETCH_FILMS_REQUEST',
    FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS',
    FETCH_FILMS_FAILURE = 'FETCH_FILMS_FAILURE',
}

export class FetchFilmsRequest implements Action {
    readonly type = FilmListActionTypes.FETCH_FILMS_REQUEST;
}

export class FetchFilmsSuccess implements Action {
    readonly type = FilmListActionTypes.FETCH_FILMS_SUCCESS;
    constructor(public payload: any) { }
}

export class FetchFilmsFailure implements Action {
    readonly type = FilmListActionTypes.FETCH_FILMS_FAILURE;
}

export type FilmActions
    = FetchFilmsRequest
    | FetchFilmsSuccess
    | FetchFilmsFailure;
