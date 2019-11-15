import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from '../components/AppNavbar';
import Search from '../components/Search';


function MovieInfo() {
    return (
        <div className="App">
            <AppNavbar />
            <Search />
        </div>
    )
}

export default MovieInfo;
