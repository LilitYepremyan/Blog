import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { purple } from '@material-ui/core/colors';
import img1 from '../../Pages/images/flower1.jpg';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Box } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  IconButton: {
    display: 'flex',
    justifyContent: 'spaceAround',
    alignItems: 'center',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: purple[100],
  },
  btn: {
    width: '30px',
  },
}));

export default function RecipeReviewCard({title,post}) {
  const classes = useStyles();

  return (
    <Box display="flex" width="100%" justifyContent="space-around">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <>
              <IconButton aria-label="edit" className={classes.btn}>
                <SpellcheckIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="delete" className={classes.btn}>
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="comment" className={classes.btn}>
                <CommentIcon fontSize="small" />
              </IconButton>
            </>
          }
          title={title}
        />
        <CardMedia
          className={classes.media}
          image={img1}
          title="Hydrangea ..."
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
