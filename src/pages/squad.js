import React, { Fragment } from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core';
import Headersquad from '../components/headerSquad'
import IntegrantesSquad from '../components/integrantesSquad'
import Poste from '../components/posteo'
import Scrollable from '../components/Scrollable';

const useStyles = makeStyles((theme) => ({
    espacio: {
        marginTop: theme.spacing(3),
    },
    content: {
        padding: theme.spacing(3),
    },
    BG: {
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover',
    }
}));

const Index = () => {
    const classes = useStyles();
    const posteo = {
        categoria: "Tipo de juego",
        juego: "Nombre del juego",
        fechaCreacion: "18 noviembre 2021",
        userIMG: "https://pbs.twimg.com/media/EiNYM5CWAAAh9PV?format=png&name=240x240",
        sqName: "Supermegasquad",
        cuerpo: "Hola, Gamer, juguemos League of Legends ¿Qué te parece si lo descargamos en este preciso momento y descubrimos juntos como se juega? Es fácil de aprender, funciona de esta manera: 2 equipos de 5 jugadores deben destruir la base enemiga combatiendo en un mapa lleno de objetivos y monstruos. Supongamos que de entre los mas de 100 campeones Elijes a Garen, te gusta Garen, es fácil matar a tus enemigos con Garen. Al principio no necesitas ser experto por qué el juego te posiciona con otros jugadores de tu mismo nivel, esto significa que podrás mejorar con solo jugar y divertirte. No hay nada como ganar en League of Legends al lado de 4 nuevos aliados... ¿Hermoso, verdad?"
    }
    const squad = {
        squad_name: "Supermegasquad",
        desc: "Somos los mas sanguinarios del frifayer, nuestro rango? la pregunta ofende nene, puro heroico en el gremio papa Somos los mas sanguinarios del frifayer, nuestro rango? la pregunta ofende nene, puro heroico en el gremio papa Somos los mas sanguinarios del frifayer, nuestro rango? la pregunta ofende nene, puro heroico en el gremio papa Somos los mas sanguinarios del frifayer, nuestro rango? la pregunta ofende nene, puro heroico en el gremio papa Somos los mas sanguinarios del frifayer, nuestro rango? la pregunta ofende nene, puro heroico en el gremio papa",
        squad_pic: "../img/Spirited-away-ogino-chihiro-studio-ghibli-1920x1080-wallpaper.jpg",
        background_squad_pic: "../img/654978.jpg",
    }
    return (
        <Fragment >
            <Box component="div" className={classes.BG} style={{ backgroundImage: `url(${squad.background_squad_pic})` }}>
                <Box component="div" className={classes.content}>
                    <Headersquad data={squad} />
                    <Grid container direction="row" justifyContent="space-evenly" className={classes.spaceTop}>
                        <Grid item>
                            <IntegrantesSquad />
                        </Grid>
                        <Grid item sm={8}>
                            <Scrollable>
                                <Poste posteo={posteo} />
                                <Poste posteo={posteo} />
                                <Poste posteo={posteo} />
                            </Scrollable>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Fragment>
    )
}

export default Index;