import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';


// const middleware = {thunk};


const store = createStore(rootReducer, compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;




// import { createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'

// // import monitorReducersEnhancer from './enhancers/monitorReducers'
// // import loggerMiddleware from './middleware/logger'
// import rootReducer from './reducers'

// export default function configureStore(preloadedState) {
//   const middlewares = [thunkMiddleware]
// //   const middlewareEnhancer = applyMiddleware(...middlewares)

// //   const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//   const composedEnhancers = composeWithDevTools(...middlewares)

//   const store = createStore(rootReducer, preloadedState, composedEnhancers)

//   if (process.env.NODE_ENV !== 'production' && module.hot) {
//     module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
//   }

//   return store
// }