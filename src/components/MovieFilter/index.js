import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '../Common/SliderFilter';
import GenreFilter from './GenreFilter';

const MovieFilter = (props) => {
    return (
        <div className="movieFilter" >
            <Typography variant="title" color="inherit">Filters: </Typography>
            <Slider applyFilter={props.applyRatingFilter}/>
            <GenreFilter applyFilter={props.applyFilter}/>
        </div>
    );
};

export default MovieFilter;