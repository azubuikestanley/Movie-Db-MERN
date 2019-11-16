import { REQUEST_GET_MOVIES,SUCCESS_GET_MOVIES,FAILURE_GET_MOVIES } from './types';

//movies actions creator
export const requestGetMovies = () => {
    return {
        type: REQUEST_GET_MOVIES
    };
};

export const successGetMovies = (movies) => {
    return {
        type: SUCCESS_GET_MOVIES,
        movies
    };
};

export const failureGetMovies = (err) => {
    return {
        type: FAILURE_GET_MOVIES,
        err
    };
};

export const fetchMovie = dispatch => {
    return dispatch => {
        dispatch(requestGetMovies());

        return fetch('http://api.tvmaze.com/shows')
            .then(response => response.json())
            .then(movies => dispatch(successGetMovies(movies)))
            .catch(err => dispatch(failureGetMovies(err)))
    }
};