import { Box, Button, Container, makeStyles, TextField } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(3),
    },
}));

const Preferences = () => {

    const classes = useStyles();
    return (
        <Container>
            <form noValidate autoComplete="off">
                <Box >
                    <TextField id="username" label="Username" variant="outlined" />
                    <TextField id="name" label="Nombre(s)" variant="outlined" />
                    <TextField id="last-name" label="Apellido(s)" variant="outlined" />
                </Box>
                <Button
                    variant="contained"
                    component="label"
                >
                    Subir Imagen
                    <input
                        type="file"
                        hidden
                        accept="image/*"
                    />
                </Button>
                <Button
                    variant="contained"
                    component="label"
                >
                    Subir Imagen
                    <input
                        type="file"
                        hidden
                        accept="image/*"
                    />
                </Button>
            </form>
        </Container>
    )
}

export default Preferences;