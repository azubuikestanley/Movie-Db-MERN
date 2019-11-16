import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from '../components/AppNavbar';
import Search from '../components/Search';
import Movieinfo from '../components/Movieinfo';
import styled from 'styled-components';

const InfoWrapper = styled.div `

    .App{
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%);
        background: -moz-linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%);
        background: -webkit-linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%);
        background: -o-linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%);
        background: -ms-linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%); 
    }

    @media (max-width:768px) {
        .movie-content {
            margin-top: 10px
        } 
        // .App{
        //     position: absolute;
        //     width: 100vw;
        //     height: 100vh;
        //     background: linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%);
        //     background: -moz-linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%);
        //     background: -webkit-linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%);
        //     background: -o-linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%);
        //     background: -ms-linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%); 
        // }
      } 

`;




function MovieDetails(props) {
    return (
        <InfoWrapper>
            <div className="App">
                <AppNavbar />
                <Search />
                <Movieinfo props={props}/>
            </div>
        </InfoWrapper>
    )
}

export default MovieDetails;
