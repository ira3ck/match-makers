import { Avatar, Box, Chip, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CardProfile from '../components/cardProfile';
import VideoGameCard from '../components/cardVideoGame';
import Posteo from '../components/posteo';
import Scrollable from '../components/Scrollable';
import { GetPerfil } from '../api/MMapi';
import {useState} from 'react';
import {useEffect} from 'react';


const useStyles = makeStyles((theme) => ({

    alineadoDerecha: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    spaceTop: {
        marginTop: theme.spacing(3),
    },
    chipSpace: {
        margin: theme.spacing(1),
        marginRight: 0,
    },
    content: {
        padding: theme.spacing(3),
    },
    BG: {
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover',
    },
}));

const Profile = () => {
    const [User, setUser] = useState([])
    useState(() => {
        async function getPerfil(){
            const perfilRes = await GetPerfil();
            setUser(perfilRes)
           
        }
        getPerfil()      
    }, []);

    const classes = useStyles();
    const posteo = {
        gameType: "Tipo de juego",
        gameName: "Nombre del juego",
        date: "18 noviembre 2021",
        userIMG: "https://pbs.twimg.com/media/EiNYM5CWAAAh9PV?format=png&name=240x240",
        sqName: "Supermegasquad",
        body: "Hola, Gamer, juguemos League of Legends ¿Qué te parece si lo descargamos en este preciso momento y descubrimos juntos como se juega? Es fácil de aprender, funciona de esta manera: 2 equipos de 5 jugadores deben destruir la base enemiga combatiendo en un mapa lleno de objetivos y monstruos. Supongamos que de entre los mas de 100 campeones Elijes a Garen, te gusta Garen, es fácil matar a tus enemigos con Garen. Al principio no necesitas ser experto por qué el juego te posiciona con otros jugadores de tu mismo nivel, esto significa que podrás mejorar con solo jugar y divertirte. No hay nada como ganar en League of Legends al lado de 4 nuevos aliados... ¿Hermoso, verdad?"
    }
    const profile = {
        profile_pic: "../img/654978.jpg",
        background_pic: "../img/bgDEFAULT.png",
        name: "ira3ck",
        squad_name: "Supermegasquad",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium nulla nec velit eleifend dictum. Nunc dignissim purus vitae nunc posuere luctus. In pulvinar, erat nec tempor feugiat, ex quam fermentum nulla, sed facilisis felis felis ac mi. Cras convallis diam nec faucibus dignissim."
    }
    return (
        <Box component="div" className={classes.BG} style={{ backgroundImage: `url( ${profile.background_pic} )` }}>
                <Box component="div" className={classes.content}>
                    <CardProfile data={profile}></CardProfile>

                    <Chip
                        className={classes.chipSpace}
                        label="PlayStation"
                        avatar={<Avatar alt="PS" src="../img/playstation.png" />} />
                    <Chip
                        className={classes.chipSpace}
                        label="XBOX"
                        avatar={<Avatar alt="XB" src="../img/xbox.png" />} />
                    <Chip
                        className={classes.chipSpace}
                        label="Nintendo Switch"
                        avatar={<Avatar alt="NS" src="../img/switch.png" />} />
                    <Chip
                        className={classes.chipSpace}
                        label="PC"
                        avatar={<Avatar alt="PC" src="../img/pc.png" />} />

                    <Grid container direction="row" justifyContent="space-evenly" className={classes.spaceTop}>

                        <Grid item sm={8}>
                            <Scrollable>
                                <Posteo posteo={posteo}></Posteo>
                                <Posteo posteo={posteo}></Posteo>
                                <Posteo posteo={posteo}></Posteo>
                            </Scrollable>
                        </Grid>

                        <Grid item>
                            <Typography variant="h4" component="h2" className={classes.alineadoDerecha}>
                                Juegos Favoritos
                            </Typography>
                            <VideoGameCard></VideoGameCard>
                            <VideoGameCard></VideoGameCard>
                            <VideoGameCard></VideoGameCard>

                        </Grid>
                    </Grid>
                </Box>
        </Box >
    )
}

export default Profile;
