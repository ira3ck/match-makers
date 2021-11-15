import { Avatar, Box, Chip, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { Fragment } from 'react'
import CardProfile from '../components/cardProfile';
import VideoGameCard from '../components/cardVideoGame';
import Posteo from '../components/posteo';
import PrimarySearchAppBar from '../components/primaryNavbar';

const useStyles = makeStyles((theme) => ({
    espacio: {
        marginBottom: theme.spacing(3),
        //marginRight: theme.spacing(4),
    },
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
        backgroundImage: "url(../img/k4ymjhphg9f71.png)",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover',
    }
}));

const Profile = () => {

    const classes = useStyles();

    return (
        <Box component="div" className={classes.BG}>
            <Fragment>
                <Box component="div" className={classes.content}>
                    <CardProfile></CardProfile>

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
                            <div className={classes.espacio}>
                                <Posteo></Posteo>
                            </div>
                            <div className={classes.espacio}>
                                <Posteo></Posteo>
                            </div>
                            <div className={classes.espacio}>
                                <Posteo></Posteo>
                            </div>

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
            </Fragment>
        </Box >
    )
}

export default Profile;
