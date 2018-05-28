import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function likesReducer(state = initialState.likes, action) {
    switch (action.type) {
        case types.LIKE_MOVIE_SUCCESS:
            return [
                ...state,
                {
                    ...action.movie
                }
            ]

        case types.UNLIKE_MOVIE_SUCCESS:
            const index = state.map(movie => movie.imdbID).indexOf(action.movie.imdbID);
            return [
                ...state.slice(0, index), 
                ...state.slice(index + 1)
            ]

        default:
            return state;
    }
}