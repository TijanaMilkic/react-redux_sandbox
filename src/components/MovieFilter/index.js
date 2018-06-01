import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '../Common/SliderFilter';
import GenreFilter from './GenreFilter';

const MovieFilter = () => {
    return (
        <div className="movieFilter" >
            <Typography variant="title" color="inherit">Filters: </Typography>
            <Slider />
            <GenreFilter />
        </div>
    );
};

export default MovieFilter;