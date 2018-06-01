import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesList from '../MoviesList';
import MovieFilter from '../MovieFilter';

function mapStateToProps(state, ownProps) {
    const filterMovies = (filter, movies) => {
        if (!filter.length) {
            return [...movies]
        }
        return [
            ...movies.filter(movie => {
                const genreArr = movie.Genre.split(/, /);
                for (let i = 0; i < genreArr.length; i++) {
                  if (filter.indexOf(genreArr[i]) === -1) {
                    return false;
                  }
                  return genreArr[i]
                }
                return movie
            })
        ]
    }

    return {
        movies: filterMovies([], state.likes)
    };
}

class Watchlist extends Component {
    render() {
        return (
            <div className="watchlist">
                <h1>Watchlist: </h1>
                <MovieFilter />
                <MoviesList movies={this.props.movies} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Watchlist);