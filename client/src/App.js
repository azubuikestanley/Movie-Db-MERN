import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Watch from './pages/Watch';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/movieinfo/:id" component={MovieDetails} />
      <Route path="/moviedetail/:id" component={MovieShow} />
      <Route path="/watchlist/" component={Watch} />
    </BrowserRouter> 
  );
}

export default App;
