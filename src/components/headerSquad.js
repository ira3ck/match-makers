import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  alineadoDer: {
    backgroundColor: "red",
    display: 'flex',
    justifyContent: 'flex-end',
  },
  card:{
    marginTop: theme.spacing(3),
  },
  root: {
    maxWidth: 1920,
    marginTop: theme.spacing(2),
  },
  media: {
    height: 100,
  },
  joinb:{
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  descp:{
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3),
  },

  largeB:{
    backgroundColor: "gray",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3),
    width: theme.spacing(14),
    height: theme.spacing(5),
  }
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
          
        <CardContent >      
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography className = {classes.descp} gutterBottom variant="h4" component="h2">
                  Supermegasquad
                </Typography>
                <Typography className = {classes.descp} variant="p2" color="textSecondary" component="p">
                  Somos los mas sanguinarios del frifayer, nuestro rango? la pregunta ofende nene, puro heroico en el gremio papa
                </Typography>
                <Grid container>
                  <Grid item>
                    <Button className = {classes.largeB}>
                      Unirse
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography className = {classes.descp} variant="p2" color="textSecondary" component="p">
                      16 / 20
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item >            
                   <Avatar className = {classes.joinb} src = "../img/Spirited-away-ogino-chihiro-studio-ghibli-1920x1080-wallpaper.jpg" />                  
              </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
}