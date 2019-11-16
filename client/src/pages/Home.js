import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from '../components/AppNavbar';
import Search from '../components/Search';
import Movielist from '../components/Movielist';



const Home = () => {
   
    return (
        <div className="App">
            <AppNavbar />
            <Search />
            <Movielist />
        </div>
    );
}

export default Home;
