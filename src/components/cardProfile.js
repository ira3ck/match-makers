import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Badge, Button, Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    tarjeta: {
        marginTop: '3rem',
        backgroundColor: 'rgba(50, 50, 50, 0.5)',
        borderRadius: '20px',
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

export default function CardProfile({data}) {
    const classes = useStyles();

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
                        <Avatar alt="Profile Pic" src={data.picture} className={classes.large} />
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
                            {data.nickname}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <div className={classes.alineadoDerecha}>
                            <Button>
                                <Typography variant="h6" className={classes.squadButton}>
                                    {data.squad_name}
                                </Typography>
                            </Button>
                        </div>
                    </Grid>
                    <Grid item>
                        <p className={classes.squadButton}>
                            Descripción
                        </p>
                        <p>{data.desc}</p>
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    );
}