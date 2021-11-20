import { Avatar, Box, Button, FormControl, Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(3),
        color: 'rgba(255, 255, 255, 0.8)',
        marginBottom: theme.spacing(1),
    },
    alineadoDerecha: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    seccBox: {
        border: '1px solid rgba(255, 255, 255, 0.2)',
        padding: theme.spacing(1),
        paddingBottom: '0',
        borderRadius: '5px',
        marginBottom: theme.spacing(3),
    },
    seccTitle: {
        color: 'rgba(255, 255, 255, 0.8)',
        marginBottom: theme.spacing(1),
    },
    tField: {
        marginBottom: theme.spacing(1),
    },
    previewIMG: {
        backgroundImage: "url(../img/bgDEFAULT.png)",
        backgroundPosition: 'center',
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: '5px',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

const Preferences = () => {

    const classes = useStyles();
    return (
        <form noValidate autoComplete="off" className={classes.content}>
            <Box className={classes.seccBox}>
                <div className={classes.seccTitle}>Datos</div>
                <FormControl fullWidth>
                    <TextField id="username" label="Username" variant="outlined" className={classes.tField} />
                </FormControl>
                <FormControl fullWidth>
                    <TextField id="name" label="Nombre(s)" variant="outlined" className={classes.tField} />
                    <TextField id="last-name" label="Apellido(s)" variant="outlined" className={classes.tField} />
                </FormControl>
            </Box>

            <Box className={classes.seccBox}>
                <div className={classes.seccTitle}>Imágenes</div>
                <Box className={classes.seccBox}>
                    <div className={classes.alineadoDerecha}>Imagen de perfil</div>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <Avatar alt="Profile Pic" src='../img/pfpDEFAULT.png' className={classes.large} />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                component="label"
                                style={{ marginTop: '10px', marginBottom: '10px' }}
                            >
                                Subir Imagen
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*"
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.seccBox}>
                    <div className={classes.alineadoDerecha}>Background</div>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <div style={{ width: '400px', height: '240px' }}>
                                <div className={classes.previewIMG}></div>
                            </div>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                component="label"
                                style={{ marginTop: '10px', marginBottom: '10px' }}
                            >
                                Subir Imagen
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*"
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box className={classes.seccBox}>
                <div className={classes.seccTitle}>Redes Sociales</div>
                <FormControl fullWidth>
                    <TextField id="username" label="Username" variant="outlined" className={classes.tField} />
                </FormControl>
                <FormControl fullWidth>
                    <TextField id="name" label="Nombre(s)" variant="outlined" className={classes.tField} />
                    <TextField id="last-name" label="Apellido(s)" variant="outlined" className={classes.tField} />
                </FormControl>
            </Box>

            <Box className={classes.seccBox}>
                <div className={classes.seccTitle}>GamerTags</div>
                <FormControl fullWidth>
                    <TextField id="username" label="Username" variant="outlined" className={classes.tField} />
                </FormControl>
                <FormControl fullWidth>
                    <TextField id="name" label="Nombre(s)" variant="outlined" className={classes.tField} />
                    <TextField id="last-name" label="Apellido(s)" variant="outlined" className={classes.tField} />
                </FormControl>
            </Box>

            <Box className={classes.seccBox}>
                <div className={classes.seccTitle}>Plataformas de juego</div>
                <FormControl fullWidth>
                    <TextField id="username" label="Username" variant="outlined" className={classes.tField} />
                </FormControl>
                <FormControl fullWidth>
                    <TextField id="name" label="Nombre(s)" variant="outlined" className={classes.tField} />
                    <TextField id="last-name" label="Apellido(s)" variant="outlined" className={classes.tField} />
                </FormControl>
            </Box>

            <Box className={classes.seccBox}>
                <div className={classes.seccTitle}>Juegos Favoritos</div>
                <FormControl fullWidth>
                    <TextField id="username" label="Username" variant="outlined" className={classes.tField} />
                </FormControl>
                <FormControl fullWidth>
                    <TextField id="name" label="Nombre(s)" variant="outlined" className={classes.tField} />
                    <TextField id="last-name" label="Apellido(s)" variant="outlined" className={classes.tField} />
                </FormControl>
            </Box>
        </form>
    )
}

export default Preferences;