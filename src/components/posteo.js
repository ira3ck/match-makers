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
    borderRadius: 10
  },
  gameData: {
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <Card className={classes.content}>
      <Typography component="p" className={classes.gameData}>
        Tipo de juego, Nombre del juego
      </Typography>
      <Typography component="p" className={classes.gameData}>
        octubre 10 del 2021
      </Typography>
      <CardHeader
        avatar={
          <Avatar src="https://pbs.twimg.com/media/EiNYM5CWAAAh9PV?format=png&name=240x240" />
        }
        title="Username"
        subheader={<Typography className={classes.subColor}>Supermegasquad</Typography>}
        className={classes.cardHeder}
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          Hola, Gamer, juguemos League of Legends

          ¿Qué te parece si lo descargamos en este preciso momento y descubrimos juntos como se juega?

          Es fácil de aprender, funciona de esta manera: 2 equipos de 5 jugadores deben destruir la base enemiga

          combatiendo en un mapa lleno de objetivos y monstruos. Supongamos que de entre los mas de 100 campeones

          Elijes a Garen, te gusta Garen, es fácil matar a tus enemigos con Garen. Al principio no necesitas ser experto

          por qué el juego te posiciona con otros jugadores de tu mismo nivel, esto significa que podrás mejorar con solo

          jugar y divertirte. No hay nada como ganar en League of Legends al lado de 4 nuevos aliados... ¿Hermoso, verdad?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon  className={classes.iconBTN}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon   className={classes.iconBTN}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
