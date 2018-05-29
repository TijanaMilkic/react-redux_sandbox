import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from '../../actions/movieActions';
import MoviCard from '../MovieCard/MovieCardWithLike';

function mapStateToProps(state, ownProps) {
    return {
        movie: state.movies
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(movieActions, dispatch)
    };
}

//const url = movieActions.fetchMovie('Killing', 2017);


class SearchMovieForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            year: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.actions.loadMovie(this.state.title, this.state.year);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Movie title:
                    <input type="text" required value={this.state.title} onChange={this.handleChange('title')} />
                    </label>
                    <label>
                        Year:
                    <input type="number" value={this.state.year} onChange={this.handleChange('year')} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {this.props.movie && (<MoviCard key={this.props.movie.imdbID} movie={this.props.movie} />)}
                
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchMovieForm);