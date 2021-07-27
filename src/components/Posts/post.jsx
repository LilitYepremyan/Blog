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
import img from '../../Pages/images/flower1.jpg';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: purple[100],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box display="flex">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <>
              <IconButton aria-label="edit">
                <SpellcheckIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteOutlineIcon />
              </IconButton>
            </>
          }
          title="Hydrangea ..."
        />
        <CardMedia
          className={classes.media}
          image={img}
          // height="100px"
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
