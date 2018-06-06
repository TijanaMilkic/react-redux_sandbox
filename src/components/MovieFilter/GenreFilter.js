import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class GenreFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Drama: false,
            Comedy: false,
            Action: false,
            Thriller: false,
            Crime: false,
            Horror: false,
            Mystery: false,
            'Sci-Fi': false,
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevState !== this.state) {
            this.props.applyFilter(this.makeFilterArray(this.state))
        }
    }

    makeFilterArray(object) {
        let filterArray = [];
        Object.keys(object).forEach(function(key) {
            if (object[key]) {
              filterArray.push(key)
            }
        })
        return filterArray
    }

    render() {
        return (
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.checkedA}
                            onChange={this.handleChange('Drama')}
                            value="Drama"
                            color="primary"
                        />
                    }
                    label="Drama"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.checkedA}
                            onChange={this.handleChange('Comedy')}
                            value="Comedy"
                            color="primary"
                        />
                    }
                    label="Comedy"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.checkedA}
                            onChange={this.handleChange('Action')}
                            value="Action"
                            color="primary"
                        />
                    }
                    label="Action"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.checkedA}
                            onChange={this.handleChange('Thriller')}
                            value="Thriller"
                            color="primary"
                        />
                    }
                    label="Thriller"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.checkedA}
                            onChange={this.handleChange('Crime')}
                            value="Crime"
                            color="primary"
                        />
                    }
                    label="Crime"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.checkedA}
                            onChange={this.handleChange('Horror')}
                            value="Horror"
                            color="primary"
                        />
                    }
                    label="Horror"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.checkedA}
                            onChange={this.handleChange('Mystery')}
                            value="Mystery"
                            color="primary"
                        />
                    }
                    label="Mystery"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.checkedA}
                            onChange={this.handleChange('Sci-Fi')}
                            value="Sci-fi"
                            color="primary"
                        />
                    }
                    label="Sci-fi"
                />
            </FormGroup>
        );
    }
}

export default GenreFilter;