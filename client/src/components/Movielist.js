import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { fetchMovie } from '../redux/actions/moviesActions';
import PropTypes from 'prop-types';
import '../SassMovie.scss';


const Movielist = ({fetchMovie, movies}) => {    
   

  useEffect(() => {
      fetchMovie()
      return () => {
          
      };
  }, []);


    return (
        <div className="mt-3">
            <div className="container-fluid">
                <div className="row">
               
                {movies.movies.map((movie) => (
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={movie.id}>
                        <div className="movie-content">
                            <div className="movie-wrapper">
                                <div className="movie-picture">
                                    <img src={movie.image.medium} alt="movie-img" />
                                </div>
                            </div>
                            <div className="movie-content-inner">
                                <h6 className="movie-title">{movie.name}</h6> 
                                <p>Rating: {movie.rating.average} <i className="material-icons">stars</i></p>
                                <p><span>Year: </span> {movie.premiered}</p>                             
                                <p><span>Language: </span>{movie.language}</p>  
                                <a 
                                    href={`/moviedetail/${movie.id}`} 
                                    className="btn btn-primary d-flex justify-content-center"
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                ))};

                </div>
            </div>
 
            <div>
                <Pagination />
            </div>
        </div>
    );
}

Movielist.propTypes = {
    fetchMovie: PropTypes.func.isRequired,
    movies: PropTypes.object.isRequired
}

const MapDispatchToProps = dispatch => {
    return {
        fetchMovie: () => dispatch(fetchMovie())
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies
});

export default connect(mapStateToProps, MapDispatchToProps )(Movielist);
