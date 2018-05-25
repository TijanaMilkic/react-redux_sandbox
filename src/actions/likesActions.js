import * as types from './actionTypes';

export function likeMovieSuccess(movie) {
    return {
        type: types.LIKE_MOVIE_SUCCESS,
        movie
    }
}

export function unlikeMovieSuccess(movie) {
    return {
        type: types.UNLIKE_MOVIE_SUCCESS,
        movie
    }
}

export function likeMovie(movie) {
    return dispatch => {
        return dispatch(likeMovieSuccess(movie));
    }
}