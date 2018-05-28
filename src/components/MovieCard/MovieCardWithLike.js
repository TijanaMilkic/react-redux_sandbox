import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieCard from './index';
import * as likesActions from '../../actions/likesActions';

function mapStateToProps(state, ownProps) {
    let liked = false;
    state.likes.map(movie => movie.imdbID === ownProps.movie.imdbID && (liked = true));

    return {
        liked,
        movies: ownProps.movie
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(likesActions, dispatch)
    };
}

class MovieCardWithLike extends Component {
    constructor(props) {
        super(props);

        this.addHandler = this.addHandler.bind(this);
        this.removeHandler = this.removeHandler.bind(this);
    }

    addHandler(movie) {
        this.props.actions.likeMovie(movie);
    }

    removeHandler(movie) {
        this.props.actions.unlikeMovie(movie);
    }

    render() {
        return (
            <div>
                <MovieCard movie={this.props.movies} liked={this.props.liked} onAdd={this.addHandler} onRemove={this.removeHandler}/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieCardWithLike);