import { FilmListActionTypes, FilmActions } from "../actions/film-list";

export let initialState = {
    films: [],
    isFetching: false
};

export function filmListReducer(state = initialState, action: FilmActions) {
    switch (action.type) {
        case FilmListActionTypes.FETCH_FILMS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case FilmListActionTypes.FETCH_FILMS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                films: action.payload
            });
        case FilmListActionTypes.FETCH_FILMS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}