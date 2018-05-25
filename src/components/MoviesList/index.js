import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCardWithLike';


const MoviesList = ({movies}) => {
    return (
        <div className="movieList">
            {movies.map(movie =>
                    <MovieCard key={movie.imdbID} movie={movie} />
                )}
        </div>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MoviesList;