import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesList from '../MoviesList';

function mapStateToProps(state, ownProps) {
    return {
        movies: state.likes
    };
}

class Watchlist extends Component {
    render() {
        return (
            <div>
                <h1>Watchlist: </h1>
                <MoviesList movies={this.props.movies} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Watchlist);