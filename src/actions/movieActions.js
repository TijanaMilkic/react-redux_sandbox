import * as types from './actionTypes';
import fetchMovie from '../services/api/api';

export function loadMovieSuccess(movie) {
    return {
        type: types.LOAD_MOVIE_SUCCESS,
        movie
    }
}

export function loadMovieFailure() {
    return {
        type: types.LOAD_MOVIE_FAILURE
    }
}

export function loadMovie(title, year = '') {
    return dispatch => {
        return(
            fetchMovie(title, year)
                .then(
                    res => dispatch(loadMovieSuccess(res)),
                    err => console.log(err)
                )
        )
    }

}

