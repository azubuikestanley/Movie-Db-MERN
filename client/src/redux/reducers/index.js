import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import watchListReducer from './watchListReducer';

const rootReducer = combineReducers({
   movies: moviesReducer,
   movieLists: watchListReducer,
});


export default rootReducer;