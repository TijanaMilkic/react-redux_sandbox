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

        default:
            return state;
    }
}