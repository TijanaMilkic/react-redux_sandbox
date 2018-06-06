import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from '../../actions/movieActions';
import MoviCard from '../MovieCard/MovieCardWithLike';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import compose from 'recompose/compose';


const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

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


class SearchMovieForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            year: '',
            loading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.movie !== this.props.movie) {
            this.setState({loading: false})
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        this.setState({loading: true})
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
                    <input type="submit" value="Submit" disabled={this.state.loading} />
                </form>
                {this.props.movie && (<MoviCard key={this.props.movie.imdbID} movie={this.props.movie} />)}

                {this.state.loading && (<CircularProgress className={this.props.classes.progress} size={50} />)}
            </div>
        );
    }
}

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(SearchMovieForm);