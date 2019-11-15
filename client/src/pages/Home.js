import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from '../components/AppNavbar';
import Search from '../components/Search';
// import '../App.css';


const Home = () => {
    return (
        <div className="App">
            <AppNavbar />
            <Search />
        </div>
    )
}

export default Home;
