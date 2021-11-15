import React, { Fragment } from 'react'
import { Box, Container, makeStyles } from '@material-ui/core';
import Posteo from '../components/posteo'
import FilterBar from '../components/filterBar'
import BannerInicio from '../components/BannerInicio'

const useStyles = makeStyles((theme) => ({
    espacio: {
        marginTop: theme.spacing(3),
    },
    container:{
        backgroundColor: "rgb(50, 50, 50)",
    },
}));

const Index = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Box component="div" className={classes.container}>
            <BannerInicio></BannerInicio>
            <Container>
                <FilterBar></FilterBar>
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
            </Box>
        </Fragment>

    )
}

export default Index;
