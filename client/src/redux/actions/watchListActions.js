import { REQUEST_GET_WATCHLIST, SUCCESS_GET_WATCHLIST, FAILURE_GET_WATCHLIST} from './types';


//movies actions creator
export const requestGetwatchList = () => {
    return {
        type: REQUEST_GET_WATCHLIST,
        
    };
};

export const successGetwatchList = (movieLists) => {
    return {
        type: SUCCESS_GET_WATCHLIST,
        movieLists
    };
};

export const failureGetWatchList = (err) => {
    return {
        type: FAILURE_GET_WATCHLIST,
        err
    };
};


export const fetchWatchList = dispatch => {
    return dispatch => {
        dispatch(requestGetwatchList());

        return fetch('http://localhost:5000/api/watchlist')
            .then(response => response.json())
            .then(movieLists => dispatch(successGetwatchList(movieLists)))
            .catch(err => dispatch(failureGetWatchList(err)))
    }
};