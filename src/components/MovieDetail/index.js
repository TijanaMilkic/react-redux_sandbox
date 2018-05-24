import React from 'react';

const MovieDetail = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            Movie id: {id}
        </div>
    );
};

export default MovieDetail;