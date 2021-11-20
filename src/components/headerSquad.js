import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  alineadoDer: {
    backgroundColor: "red",
    display: 'flex',
    justifyContent: 'flex-end',
  },
  card: {
    marginTop: theme.spacing(3),
  },
  root: {
    maxWidth: 1920,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: "rgba(50,50,50,0.75)",
    color: 'aliceblue',
    borderRadius: '20px',
  },
  media: {
    height: 100,
  },
  joinb: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  descp: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3),
  },

  largeB: {
    backgroundColor: "gray",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: theme.spacing(14),
    height: theme.spacing(5),
    color: 'aliceblue',
  },
  squadIMG: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no - repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
  }
}));

export default function MediaCard({data}) {
  const classes = useStyles();

  return (
    <Fragment>
      <Box className={classes.root}>
        <Grid container
          direction="row"
          justifyContent="space-between">
          <Grid item style={{ marginRight: "20px" }} sm={8} xs={12}>
            <Typography className={classes.descp} gutterBottom variant="h4" component="h2">
              {data.squad_name}
            </Typography>
            <Typography className={classes.descp} variant="p2" color="aliceblue" component="p">
              {data.desc}
            </Typography>
            <Grid container>
              <Grid item>
                <Button className={classes.largeB}>
                  Unirse
                </Button>
              </Grid>
              <Grid item>
                <Typography className={classes.descp} variant="p2" color="aliceblue" component="p">
                  16 / 20
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Box component="div" className={classes.squadIMG} style={{backgroundImage: `url( ${data.squad_pic}) `}}></Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}