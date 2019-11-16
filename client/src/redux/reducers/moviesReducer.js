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



// {   id: 1, 
//     name: ' Under The Dome', 
//     img: 'https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg',
//     rate: '6.8',
//     detail: 'Touch darkness and darkness touches you back. <b>True Detective</b> centers on troubled cops and the investigations that drive them to the edge. Each season features a new cast and a new case'
// }