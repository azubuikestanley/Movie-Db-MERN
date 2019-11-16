import { REQUEST_GET_MOVIES, SUCCESS_GET_MOVIES, FAILURE_GET_MOVIES, MOVIES_LOADING } from '../actions/types';


const initialState = {
    movies: [],
    loading: false
}

export default function (state = initialState, action) {
    switch(action.type) {
        case REQUEST_GET_MOVIES:
            return {
                ...state
            };
        case SUCCESS_GET_MOVIES:
            return {
                ...state,
                movies: action.movies
            };
        case FAILURE_GET_MOVIES:
            return {
                ...state,
                err: action.err
            };
        case MOVIES_LOADING:
            return {
                ...state,
                loading: true
            };
        default: return state;
    }
}
