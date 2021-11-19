import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  espacio: {
    marginTop: theme.spacing(3),
  },
  content: {
    width: '100%',
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(3),
    marginBottom: '10px',
    borderRadius: 10,
  },
  gameposteo: {
    padding: '5px'
  },
  fecha: {
    padding: '5px',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  cardHeder: {
    backgroundColor: '#525570',
    width: '20rem',
    borderRadius: 10,
  },
  subColor: {
    color: 'aliceblue',
    fontSize: 'small'
  },
  iconBTN: {
    fill: '#fff',
  },
}));

export default function RecipeReviewCard({posteo}) {
  const classes = useStyles();
  return (
    <Card className={classes.content}>
      <Typography component="p" className={classes.gameData}>
        {posteo.gameType}, {posteo.gameName}
      </Typography>
      <Typography component="p" className={classes.gameposteo}>
        {posteo.date}
      </Typography>
      <CardHeader
        avatar={
          <Avatar src={posteo.userIMG} />
        }
        title="Username"
        subheader={<Typography className={classes.subColor}>{posteo.sqName}</Typography>}
        className={classes.cardHeder}
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          {posteo.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className={classes.iconBTN}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon  className={classes.iconBTN}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
