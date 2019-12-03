import { FilmDetailsActionTypes, FilmDetailsActions } from "../actions/film-details";

export let initialState = {
    film: {},
    isFetching: false
};

export function filmDetailsReducer(state = initialState, action: FilmDetailsActions) {
    switch (action.type) {
        case FilmDetailsActionTypes.FETCH_FILMS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case FilmDetailsActionTypes.FETCH_FILMS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                film: action.payload
            });
        case FilmDetailsActionTypes.FETCH_FILMS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}