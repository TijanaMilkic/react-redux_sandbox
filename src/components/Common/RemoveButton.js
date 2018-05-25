import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
  });

const RemoveButton = (props) => {
    const { classes } = props;
    return (
        <Button variant="fab" color="secondary" aria-label="add" className={classes.button}>
            <DeleteIcon />
        </Button>
    );
};

export default withStyles(styles)(RemoveButton);