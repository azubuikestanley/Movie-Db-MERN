import React from 'react'

const Movies = ({ movies, loading }) => {
 if (loading) {
     return <h2>Loading...</h2>;
 }
    return (
        <div className="row">
            {movies.map((movie) => (
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6" key={movie.id}>
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
            ))}
        </div>
    )
}

export default Movies;
