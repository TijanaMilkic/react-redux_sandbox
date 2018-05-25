import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieCard from './index';
import * as likesActions from '../../actions/likesActions';

function mapStateToProps(state, ownProps) {
    let liked;
    state.likes.map(movie => movie.imdbID === ownProps.movie.imdbID ? liked = true : liked = false);

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

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        //this.props.actions.likeMovie(movie);
        console.log('clicked');
    }

    render() {
        return (
            <div>
                <MovieCard movie={this.props.movies} liked={this.props.liked} onAdd={this.clickHandler}/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieCardWithLike);