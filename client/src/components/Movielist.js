import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { fetchMovie } from '../redux/actions/moviesActions';
import PropTypes from 'prop-types';
import Movies from './Movies';
import '../SassMovie.scss';


const Movielist = ({fetchMovie, movies}) => {    
//    const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const  [postsPerPage] = useState(12);

  useEffect(() => {
      setLoading(true);
      fetchMovie();
      setLoading(false);
      return () => {
          
      };
  }, []);
console.log(movies.movies);

    // Get Current Movies
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = movies.movies.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="mt-3">
            <div className="container-fluid">
                <Movies movies={currentPosts} loading={loading} />
                <br />
                <Pagination 
                    postsPerPage={postsPerPage} 
                    totalPosts={movies.movies.length}
                    paginate={paginate}
                />
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
