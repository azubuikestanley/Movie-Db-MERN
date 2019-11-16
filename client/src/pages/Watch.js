import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from '../components/AppNavbar';
import Search from '../components/Search';
import Watchlist from '../components/Watchlist';


function Watch() {
    return (
        <div className="App">
            <AppNavbar />
            <Search />
            <Watchlist />
        </div>
    )
}

export default Watch;
