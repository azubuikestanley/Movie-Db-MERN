import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';
import WatchList from './pages/WatchList';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/movieinfo/:id" component={MovieInfo} />
      <Route path="/watchlist/" component={WatchList} />
    </BrowserRouter> 
  );
}

export default App;
