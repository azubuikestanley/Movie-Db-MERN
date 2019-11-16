import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from '../components/AppNavbar';
import Search from '../components/Search';
import Movielist from '../components/Movielist';
import { Provider } from 'react-redux';
import store from '../redux/store';


const Home = () => {
   
    return (
        <Provider store={store}>
            <div className="App">
                <AppNavbar />
                <Search />
                <Movielist />
            </div>
        </Provider> 
    );
}

export default Home;
