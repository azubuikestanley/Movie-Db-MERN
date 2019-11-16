import { REQUEST_GET_MOVIES, SUCCESS_GET_MOVIES, FAILURE_GET_MOVIES } from '../actions/types';


const initialState = {
    movies: []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case REQUEST_GET_MOVIES:
            return {
                ...state
            }
        case SUCCESS_GET_MOVIES:
            return {
                ...state,
                movies: action.movies
            }
        case FAILURE_GET_MOVIES:
            return {
                ...state,
                err: action.err
            }
        default: return state;
    }
}
