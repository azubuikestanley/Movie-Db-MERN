import { REQUEST_GET_WATCHLIST, SUCCESS_GET_WATCHLIST, FAILURE_GET_WATCHLIST} from '../actions/types';


const initialState = {
    movieLists: [],
}

export default function (state = initialState, action) {
    switch(action.type) {
        case REQUEST_GET_WATCHLIST:
            return {
                ...state
               
            };
        case SUCCESS_GET_WATCHLIST:
            return {
                ...state,
                movieLists: action.movieLists,
                
            };
        case FAILURE_GET_WATCHLIST:
            return {
                ...state,
                err: action.err
            };
        default: return state;
    }
}
