import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        marginBottom: theme.spacing(2),
    },
    media: {
        height: 100,
    },
    alineadoDerecha: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
}));

export default function VideoGameCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image='../img/Free-HD-Studio-Ghibli-Wallpapers.jpg'
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Howls Moving Castle
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}