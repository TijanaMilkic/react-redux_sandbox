import React from 'react';
import {Link} from 'react-router-dom';

import AddButton from '../Common/AddButton';
import RemoveButton from '../Common/RemoveButton';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
      maxWidth: 345,
      display: 'inline-block'
    },
    media: {
      height: 0,
      paddingTop: '125%',
    },
  };

  function MovieCard({movie, liked, onAdd, classes}) {
      
    return (
      <div className="movieCard">
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={movie.Poster}
            title={movie.Title}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {movie.Title}
            </Typography>
            <Typography component="p">
              {movie.Plot}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <Link to={`movie-detail/${movie.imdbID}`}>More</Link>
            </Button>
            {liked ? <RemoveButton /> : <AddButton />}
          </CardActions>
        </Card>
      </div>
    );
  }

export default withStyles(styles)(MovieCard);