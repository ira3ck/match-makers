import React, { Fragment } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Posteo from "../components/posteo";
import FilterBar from "../components/filterBar";
import BannerInicio from "../components/BannerInicio";
import CrearPost from "../components/crearPost";

const useStyles = makeStyles((theme) => ({
  espacio: {
    marginTop: theme.spacing(3),
  },
  container: {
    backgroundColor: "rgb(50, 50, 50)",
  },
}));

const Index = () => {
  const classes = useStyles();
  const posteo = {
    gameType: "Tipo de juego",
    gameName: "Nombre del juego",
    date: "18 noviembre 2021",
    userIMG:
      "https://pbs.twimg.com/media/EiNYM5CWAAAh9PV?format=png&name=240x240",
    sqName: "Supermegasquad",
    body: "Hola, Gamer, juguemos League of Legends ¿Qué te parece si lo descargamos en este preciso momento y descubrimos juntos como se juega? Es fácil de aprender, funciona de esta manera: 2 equipos de 5 jugadores deben destruir la base enemiga combatiendo en un mapa lleno de objetivos y monstruos. Supongamos que de entre los mas de 100 campeones Elijes a Garen, te gusta Garen, es fácil matar a tus enemigos con Garen. Al principio no necesitas ser experto por qué el juego te posiciona con otros jugadores de tu mismo nivel, esto significa que podrás mejorar con solo jugar y divertirte. No hay nada como ganar en League of Legends al lado de 4 nuevos aliados... ¿Hermoso, verdad?",
  };
  return (
    <Fragment>
      <Box component="div" className={classes.container}>
        <BannerInicio></BannerInicio>
        <Container>
          <CrearPost></CrearPost>
          <FilterBar></FilterBar>
          <div className={classes.espacio}>
            <Posteo posteo={posteo}></Posteo>
          </div>
          <div className={classes.espacio}>
            <Posteo posteo={posteo}></Posteo>
          </div>
          <div className={classes.espacio}>
            <Posteo posteo={posteo}></Posteo>
          </div>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Index;
