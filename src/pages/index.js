import React, { Fragment } from 'react'
import { Container, makeStyles } from '@material-ui/core';
import PrimarySearchAppBar from '../components/primaryNavbar'
import Posteo from '../components/posteo'

const useStyles = makeStyles((theme) => ({
    espacio: {
        marginTop: theme.spacing(3),
    },
}));

const Index = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <PrimarySearchAppBar />
            <Container>
                <div className={classes.espacio}> 
                    <Posteo></Posteo>
                </div>
                <div className={classes.espacio}>
                    <Posteo></Posteo>
                </div>
                <div className={classes.espacio}>
                    <Posteo></Posteo>
                </div>
            </Container>
        </Fragment>

    )
}

export default Index;
