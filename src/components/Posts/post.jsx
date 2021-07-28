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
import img2 from '../../Pages/images/flower2.jpg';
import img3 from '../../Pages/images/flower3.jpg';
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

export default function RecipeReviewCard() {
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
          title="Hydrangea ..."
        />
        <CardMedia
          className={classes.media}
          image={img1}
          title="Hydrangea ..."
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Hydrangea (/haɪˈdreɪndʒiə/) common names hydrangea or hortensia, is
            a genus of 70–75 species of flowering plants native to Asia and the
            Americas. By far the greatest species diversity is in eastern Asia,
            notably China, Korea, and Japan. Most are shrubs 1 to 3 meters tall,
            but some are small trees, and others lianas reaching up to 30 m (98
            ft) by climbing up trees. They can be either deciduous or evergreen,
            though the widely cultivated temperate species are all deciduous.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <div>
              <IconButton aria-label="edit" className={classes.btn}>
                <SpellcheckIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="delete" className={classes.btn}>
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="comment" className={classes.btn}>
                <CommentIcon fontSize="small" />
              </IconButton>
            </div>
          }
          title="Paeonia ..."
        />
        <CardMedia
          className={classes.media}
          image={img2}
          title="Hydrangea ..."
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Hydrangea (/haɪˈdreɪndʒiə/) common names hydrangea or hortensia, is
            a genus of 70–75 species of flowering plants native to Asia and the
            Americas. By far the greatest species diversity is in eastern Asia,
            notably China, Korea, and Japan. Most are shrubs 1 to 3 meters tall,
            but some are small trees, and others lianas reaching up to 30 m (98
            ft) by climbing up trees. They can be either deciduous or evergreen,
            though the widely cultivated temperate species are all deciduous.
          </Typography>
        </CardContent>
      </Card>
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
                <SpellcheckIcon />
              </IconButton>
              <IconButton aria-label="delete" className={classes.btn}>
                <DeleteOutlineIcon />
              </IconButton>
              <IconButton aria-label="comment" className={classes.btn}>
                <CommentIcon fontSize="small" justifyContent="spaceAround" />
              </IconButton>
            </>
          }
          title="Hydrangea ..."
        />
        <CardMedia
          className={classes.media}
          image={img3}
          title="Hydrangea ..."
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Hydrangea (/haɪˈdreɪndʒiə/) common names hydrangea or hortensia, is
            a genus of 70–75 species of flowering plants native to Asia and the
            Americas. By far the greatest species diversity is in eastern Asia,
            notably China, Korea, and Japan. Most are shrubs 1 to 3 meters tall,
            but some are small trees, and others lianas reaching up to 30 m (98
            ft) by climbing up trees. They can be either deciduous or evergreen,
            though the widely cultivated temperate species are all deciduous.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
