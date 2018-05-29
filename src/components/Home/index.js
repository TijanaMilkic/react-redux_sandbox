import React from 'react';
import Button from '@material-ui/core/Button';
import MoviesList from '../MoviesList';
import movies from '../../services/api/mockApi';
import SearchMovieForm from '../SearchMovieForm';

const Home = () => {
    return (
        <div className="home">
            <h1>Home</h1>
            <Button color="primary" variant="outlined" size="large">OK</Button>
            <MoviesList movies={movies}/>
            <SearchMovieForm />
        </div>
    );
};

export default Home;