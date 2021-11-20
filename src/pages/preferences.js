import { Box, Button, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(3),
    },
    txtFiel: {
        display: "block",
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(1),
        width: "15rem",
        
      },
    cuadroTexto:{
        display: "flex",
        direction: "column",
        justifyContent: "flex-start",
        aligntItems: "stretch",
    },
}));

const Preferences = () => {

    const classes = useStyles();
    return (
        <Container>
            <form noValidate autoComplete="off" className={classes.content}>
                <Box className={classes.cuadroTexto}>
                    <div><Typography>
                        Nombre de usuario:
                        </Typography></div>
                    <TextField id="username" label="Username" variant="outlined" />
                    <div><Typography>
                        Nombre(s):
                    </Typography></div>
                    <TextField id="name" label="Nombre(s)" variant="outlined" />
                    <div><Typography>
                        Apellido(s):
                    </Typography></div>
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