import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Badge, Button, Card, Grid, Grow, Paper, Switch, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    tarjeta: {
        marginTop: '3rem',
        backgroundColor: '#323232',
        //opacity: '60%',
        padding: theme.spacing(2),
        color: 'aliceblue',
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    info: {
        padding: theme.spacing(3),
        color: 'aliceblue',
    },
    alineadoDerecha: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    squadButton: {
        color: 'aliceblue',
    },
}));

export default function CardProfile() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Paper className={classes.tarjeta}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item>
                    <Badge color="secondary" overlap="circular" badgeContent=" "
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}>
                        <Avatar alt="Invitado" src="../img/654978.jpg" className={classes.large} />
                    </Badge>
                </Grid>

                <Grid
                    container
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="stretch"
                    item sm={10}
                    className={classes.info}>
                    <Grid item
                        justifyContent="flex-end">
                        <Typography variant="h3">
                            ira3ck
                        </Typography>
                    </Grid>
                    <Grid item>
                        <div className={classes.alineadoDerecha}>
                            <Button>
                                <Typography variant="h6" className={classes.squadButton}>
                                    Supermegasquad
                                </Typography>
                            </Button>
                        </div>
                    </Grid>
                    <Grid item>
                        <p className={classes.squadButton}>
                            Descripción
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas fringilla.</p>
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    );
}