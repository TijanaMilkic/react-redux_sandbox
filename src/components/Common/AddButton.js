import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
  });

const AddButton = (props) => {
    const { classes, onClick } = props;
    return (
        <Button variant="fab" color="primary" aria-label="add" className={classes.button} onClick={onClick}>
            <AddIcon />
        </Button>
    );
};

export default withStyles(styles)(AddButton);
