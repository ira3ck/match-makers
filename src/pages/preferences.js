import { Avatar, Box, Button, Checkbox, FormControl, FormControlLabel, Grid, makeStyles, TextField } from '@material-ui/core';
import { Facebook, Instagram, Reddit, Twitter, YouTube } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { GetUsers } from '../api/MMapi';

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
    invIcon: {
        WebkitFilter: 'invert(1)',
        filter: 'invert(1)',
        width: '25px',
        height: 'auto',
        opacity: '80%'
    },
    invIMG: {
        WebkitFilter: 'invert(1)',
        filter: 'invert(1)',
        width: '100px',
        height: 'auto',
    },
}));

const Preferences = () => {

    const classes = useStyles();

    const [usuarios, aqui] = useState([]);

    useEffect(() => {
        async function getTheThing(){
            const userPref = await GetUsers();
            aqui(userPref)
        }
        getTheThing()
    }, []);

    const user = {
        name: "",
        last_name: "",
        username: "",
        email: ""
    }

    usuarios.forEach(element => {
        user.name = element.name;
        user.last_name = element.last_name;
        user.username = element.username;
        user.email = element.email;
    });

    const [userModif, setUser] = useState({
        name: user.name,
        last_name: user.last_name,
        username: user.username,
        email: user.email
    });

    const handleChange = (key, event) => {
        const userModif = {
            ...userModif,
            [key]: event,
        }
        setUser(userModif);
      };

    return (
        <form noValidate autoComplete="off" className={classes.content}>
            <p>{user.email}</p>
            <p>{userModif.username}</p>
            <Box className={classes.seccBox}>
                <div className={classes.seccTitle}>Datos</div>
                <FormControl fullWidth>
                    <TextField id="username" label="Username" variant="outlined" name="username" className={classes.tField} onChange={handleChange}/>
                </FormControl>
                <FormControl fullWidth>
                    <TextField id="name" label="Nombre(s)" variant="outlined" name="name" className={classes.tField} value={user.name}/>
                    <TextField id="last-name" label="Apellido(s)" variant="outlined" name="last_name" className={classes.tField} value={user.last_name}/>
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
                    <Grid container spacing={2} alignItems="flex-end" className={classes.tField}>
                        <Grid item>
                            <Facebook />
                        </Grid>
                        <Grid item>
                            <TextField id="sm-fb" label="facebook" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} alignItems="flex-end" className={classes.tField}>
                        <Grid item>
                            <Twitter />
                        </Grid>
                        <Grid item>
                            <TextField id="sm-tw" label="twitter" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} alignItems="flex-end" className={classes.tField}>
                        <Grid item>
                            <Instagram />
                        </Grid>
                        <Grid item>
                            <TextField id="sm-in" label="instagram" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} alignItems="flex-end" className={classes.tField}>
                        <Grid item>
                            <img src="https://img.icons8.com/ios-filled/50/000000/tiktok--v1.png" alt="tiktok icon" className={classes.invIcon} />
                        </Grid>
                        <Grid item>
                            <TextField id="sm-tk" label="tiktok" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} alignItems="flex-end" className={classes.tField}>
                        <Grid item>
                            <YouTube />
                        </Grid>
                        <Grid item>
                            <TextField id="sm-yt" label="youtube" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} alignItems="flex-end" className={classes.tField}>
                        <Grid item>
                            <Reddit />
                        </Grid>
                        <Grid item>
                            <TextField id="sm-rd" label="reddit" />
                        </Grid>
                    </Grid>
                </FormControl>
            </Box>

            <Box className={classes.seccBox}>
                <div className={classes.seccTitle}>Plataformas de juego</div>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-end"
                >
                    {
                        [
                            {
                                image: "../img/playstation.png",
                                name: "Playstation 4",
                                value: "ps4",
                            },
                            {
                                image: "../img/xbox.png",
                                name: "Xbox 360",
                                value: "xb360"
                            },
                            {
                                image: "../img/xbox.png",
                                name: "XBOX Series X",
                                value: "xbx"
                            },
                            {
                                image: "../img/pc.png",
                                name: "PC",
                                value: "pc"
                            },
                        ].map((item) => (
                            <Grid item>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                >
                                    <Grid item><img src={item.image} alt={item.name} className={classes.invIMG} /></Grid>
                                    <Grid item><FormControlLabel
                                        value={item.value}
                                        control={<Checkbox color="primary" />}
                                        label={item.name}
                                        labelPlacement="top"
                                    /></Grid>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-end"
                >
                    {
                        [
                            {
                                image: "../img/playstation.png",
                                name: "Playstation 5",
                                value: "ps5",
                            },
                            {
                                image: "../img/xbox.png",
                                name: "Xbox One",
                                value: "xb1"
                            },
                            {
                                image: "../img/wiiu.png",
                                name: "Wii U",
                                value: "wiiu"
                            },
                            {
                                image: "../img/switch.png",
                                name: "Nintendo Switch",
                                value: "ns"
                            },
                        ].map((item) => (
                            <Grid item>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                >
                                    <Grid item><img src={item.image} alt={item.name} className={classes.invIMG} /></Grid>
                                    <Grid item><FormControlLabel
                                        value={item.value}
                                        control={<Checkbox color="primary" />}
                                        label={item.name}
                                        labelPlacement="top"
                                    /></Grid>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>

            <Box className={classes.seccBox}>
                <div className={classes.seccTitle}>GamerTags</div>
                {
                    [
                        {
                            image: "../img/playstation.png",
                            name: "Playstation 4",
                            value: "ps4",
                        },
                        {
                            image: "../img/playstation.png",
                            name: "Playstation 5",
                            value: "ps5",
                        },
                        {
                            image: "../img/xbox.png",
                            name: "Xbox 360",
                            value: "xb360"
                        },
                        {
                            image: "../img/xbox.png",
                            name: "XBOX Series X",
                            value: "xbx"
                        },
                        {
                            image: "../img/xbox.png",
                            name: "Xbox One",
                            value: "xb1"
                        },
                        {
                            image: "../img/wiiu.png",
                            name: "Wii U",
                            value: "wiiu"
                        },
                        {
                            image: "../img/switch.png",
                            name: "Nintendo Switch",
                            value: "ns"
                        },
                        {
                            image: "../img/pc.png",
                            name: "Steam",
                            value: "steam"
                        },
                        {
                            image: "../img/pc.png",
                            name: "Epic Games",
                            value: "epic"
                        },
                        {
                            image: "../img/pc.png",
                            name: "GOG",
                            value: "gog"
                        },
                        {
                            image: "../img/pc.png",
                            name: "Origin",
                            value: "origin"
                        },
                    ].map((item) => (
                        <Grid container spacing={2} alignItems="flex-end" className={classes.tField}>
                            <Grid item>
                                <img src={item.image} alt={item.name} className={classes.invIcon} />
                            </Grid>
                            <Grid item>
                                <TextField id={item.value} label={item.name} />
                            </Grid>
                        </Grid>
                    ))
                }
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