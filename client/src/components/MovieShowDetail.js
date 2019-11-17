import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchMovie } from '../redux/actions/moviesActions';


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

        .material-icons {
            color: #e0009d;
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

const MovieShowDetail = ({props, movie, fetchMovie}) => {
    const [data, setData] = useState({
        watchlist: true
    });

    useEffect(() => {
        fetchMovie()
        return () => {
            
        };
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/watchlist', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({'name': movie[0].name})
        })
            .then(response => response.json())
            .then(response => {
                if (response.name == movie.name) {
                    setData({...data, watchlist: false})
                }
            })
           
            .catch(err => console.log(err));

    }


  

    return (
        <InfoWrapper>
            <div className="container">
            {movie[0] == undefined ? <h2>Please Wait...</h2> : 
                (<div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                        <img src={movie[0].image.medium} alt="movie" width="300" className="img-responsive" />
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className="card">
                            <h3>Movie Name: <span>{movie[0].name}</span></h3> 
                            <h5>Genre: <span> {movie[0].genres[0]}</span> - <span> {movie[0].genres[1]}</span></h5> 
                            <h5>Premiere: <span> {movie[0].premiered}</span></h5> 
                            <h5>Rating: <span> {movie[0].rating.average}</span><i className="material-icons">stars</i></h5> 
                            <h6>Summary: <span>{  movie[0].summary.replace(/<p[^>]*>/g, "").replace(/<\/?p[^>]*>/g, "")}</span></h6>
                            {data.watchlist && <button onClick={handleClick}>Add to Watchlist</button>} 
                        </div>
                    </div>
                </div>
                )}
            </div>
        </InfoWrapper>
    )
}

const MapDispatchToProps = dispatch => {
    return {
        fetchMovie: () => dispatch(fetchMovie())
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.props.match.params.id;
    return {
        movie: state.movies.movies.filter(movie => movie.id == id)            
    }    
}

export default connect(mapStateToProps, MapDispatchToProps )(MovieShowDetail);