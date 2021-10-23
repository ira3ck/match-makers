import React, { Fragment } from 'react'
import { Container, makeStyles } from '@material-ui/core';
import PrimarySearchAppBar from '../components/primaryNavbar'
import Headersquad from '../components/headerSquad'
import IntegrantesSquad from '../components/integrantesSquad'
import Poste from '../components/posteo'

const useStyles = makeStyles((theme) => ({
    espacio: {
        marginTop: theme.spacing(3),
    },
}));

const Index = () => {
    const classes = useStyles();
    return (
        <div style = {{backgroundImage: "url(../img/654978.jpg)"}}>
        <Fragment >
            <PrimarySearchAppBar />
            <Container>
                <Headersquad />
                <div style={{display: 'inline-flex', marginTop: 50}}>
                    <IntegrantesSquad />
                    <div style={{marginLeft: 10}}>
                        <div className={classes.espacio}> 
                            <Poste />
                        </div>
                        <div className={classes.espacio}>
                            <Poste />
                        </div>
                        <div className={classes.espacio}>
                            <Poste />
                        </div>
                    </div>
                </div>


            </Container>
        </Fragment>
        </div>
    )
}

export default Index;