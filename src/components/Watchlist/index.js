import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesList from '../MoviesList';
import MovieFilter from '../MovieFilter';

function mapStateToProps(state, ownProps) {

    return {
        movies: state.likes
    };
}

class Watchlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: [],
            ratingFilter: 1,
            movies: this.props.movies
        }

        this.applyFilter = this.applyFilter.bind(this);
        this.applyRatingFilter = this.applyRatingFilter.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevState.filter !== this.state.filter) || (prevProps.movies !== this.props.movies) || (prevState.ratingFilter !== this.state.ratingFilter)) {
            const genreFilteredMovies = this.filterMovies(this.state.filter, this.props.movies)
            const ratingFilteredMovies = this.filterByRating(this.state.ratingFilter, genreFilteredMovies);
            this.setState({ movies: ratingFilteredMovies })
        }
    }

    filterMovies(filter, movies) {
        if (!filter.length) {
            return [...movies]
        }
        return [
            ...movies.filter(movie => {
                const genreArr = movie.Genre.split(/, /);
                for (let i = 0; i < genreArr.length; i++) {
                    if (filter.indexOf(genreArr[i]) > -1) {
                        return true;
                    }
                }
                return false
            })
        ]
    }

    filterByRating(rating, movies) {
        return [
            ...movies.filter(movie => {
                return parseInt(movie.imdbRating) >= rating
            })
        ]
    }

    applyFilter(filterArr) {
        this.setState({ filter: filterArr })
    }

    applyRatingFilter(rating) {
        this.setState({ ratingFilter: rating })
    }

    render() {
        return (
            <div className="watchlist">
                <h1>Watchlist: </h1>
                <MovieFilter applyFilter={this.applyFilter} applyRatingFilter={this.applyRatingFilter}/>
                <MoviesList movies={this.state.movies} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Watchlist);