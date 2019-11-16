import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const InfoWrapper = styled.div `
    display: flex;
    position: relative;
    margin-top: 10px;

        .card {
            width: 100%;
            background: black;
            padding: 10px;
            opacity: 0.6;
            
            button{
                color: white;
                background: purple;
                padding: 10px;
                border: none;

            }

            h3{
                color: white;
                
                span{
                    color: white;
                }
            }
            h5{
                color: white;
                
                span{
                    color: white;
                }
            }
            h6{
                color: white;
               
                span, span p b {
                    color: white;
                }
            }
        }
        @media (max-width:768px) {
            .card {
                margin-top: 10px
            } 
        }

`;

const Movieinfo = (props) => {
    const [movies, setMovies] = useState({
        watchlist: true
    });

    const HandleClick = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/watchlist', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({'name': movie.name})
        })
            .then(response => response.json())
            .then(response => {
                if (response.name == movie.name) {
                    setMovies({...movie, watchlist: false})
                }
            })
           
            // .catch(err => console.log(err));

    }

    const movie = props.props.location.state ? props.props.location.state : null
 
    const Summary_ = props.props.location.state ? movie.summary.replace(/<p[^>]*>/g, "").replace(/<\/?p[^>]*>/g, "") : null;


 
    return (
        <InfoWrapper>
            <div className="linear"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                        <img src={movie.image.original} alt="movie" width="300" className="img-responsive" />
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className="card">
                            <h3>Movie Name: <span>{movie.name}</span></h3> 
                            <h5>Genre: <span> {movie.genres[0]}</span> - <span> {movie.genres[1]}</span></h5> 
                            <h5>Premiere: <span> {movie.premiered}</span></h5> 
                            <h5>Rating: <span> {movie.rating.average}</span><i className="material-icons">stars</i></h5> 
                            <h6>Summary: <span>{Summary_}</span></h6>
                            {movies.watchlist && <button onClick={HandleClick}>Add to Watchlist</button>}
                        </div>
                    </div>
                </div>
            </div>
        </InfoWrapper>
    )
}


export default  Movieinfo;
