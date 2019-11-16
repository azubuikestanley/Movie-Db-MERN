import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import MovieShow from './pages/MovieShow';
import Watch from './pages/Watch';
import { Provider } from 'react-redux';
import store from './redux/store';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/movieinfo/:id" component={MovieDetails} />
        <Route path="/moviedetail/:id" component={MovieShow} />
        <Route path="/watchlist/" component={Watch} />
      </BrowserRouter> 
    </Provider>
  );
}

export default App;
