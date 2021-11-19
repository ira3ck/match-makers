import React from 'react'
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    bannerIMG: {
        width: "100%",
        heigh: "auto",
    },
}));

const CreatePost = () => {
    const classes = useStyles();
    return (
        <form>
            <TextField label="Creador" name="creador">

            </TextField>
        </form>
    )
}

export default CreatePost;



