import React from 'react';
import {HashRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';
import WatchList from './pages/WatchList';

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route path="/movieinfo/" component={MovieInfo} />
      <Route path="/watchlist/" component={WatchList} />
    </HashRouter> 
  );
}

export default App;
