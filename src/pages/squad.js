import React, { Fragment } from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core';
import PrimarySearchAppBar from '../components/primaryNavbar'
import Headersquad from '../components/headerSquad'
import IntegrantesSquad from '../components/integrantesSquad'
import Poste from '../components/posteo'

const useStyles = makeStyles((theme) => ({
    espacio: {
        marginTop: theme.spacing(3),
    },
    content: {
        padding: theme.spacing(3),
    },
    BG: {
        backgroundImage: "url(../img/654978.jpg)",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover',
    }
}));

const Index = () => {
    const classes = useStyles();
    return (
        <Fragment >
            <Box component="div" className={classes.BG}>
                <Box component="div" className={classes.content}>
                    <Headersquad />
                    <Grid container direction="row" justifyContent="space-evenly" className={classes.spaceTop}>
                        <Grid item>
                            <IntegrantesSquad />
                        </Grid>
                        <Grid item sm={8}>
                            <div className={classes.espacio}>
                                <Poste />
                            </div>
                            <div className={classes.espacio}>
                                <Poste />
                            </div>
                            <div className={classes.espacio}>
                                <Poste />
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Fragment>
    )
}

export default Index;