import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
// import searchReducer from './searchReducer';
// import watchlistReducer from './watchlistReducer';
// import movieitemReducer from './movieitemReducer';

const rootReducer = combineReducers({
   movies: moviesReducer,
   // search: searchReducer,
   // list: watchlistReducer,
   // movItem: movieitemReducer 
});


export default rootReducer;