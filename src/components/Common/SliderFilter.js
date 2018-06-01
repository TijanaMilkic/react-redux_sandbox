import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    width: 300,
  },
};

class SliderFilter extends React.Component {
  state = { value: 1 };

  handleChange = (event, value) => this.setState({ value });

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.container}>
        <Typography id="label">Min IMDB Rating: {value}</Typography>
        <Slider value={value} min={1} max={10} step={1} onChange={this.handleChange} />
      </div>
    );
  }
}

SliderFilter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SliderFilter);