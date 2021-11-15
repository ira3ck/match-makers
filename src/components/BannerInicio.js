import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    bannerIMG: {
        width: "100%",
        heigh: "auto",
    },
}));

const BannerSquad = () => {
    const classes = useStyles();
    return (
        <img className={classes.bannerIMG} src='../img/baner_inicio2.PNG' alt="banner"/>
    )
}

export default BannerSquad;