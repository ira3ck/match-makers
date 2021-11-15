import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import LogoIcon from './LogoIcon';
import { GroupOutlined, HomeOutlined, PersonOutlined } from '@material-ui/icons';

const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    alineadoDerecha: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    coloredText: {
        color: 'aliceblue',
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: 'rgb(0,0,0)',
        paddingRight: theme.spacing(3),
    },
    itemList: {
        marginBottom: theme.spacing(3),
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        backgroundColor: theme.palette.background.default,
    },
}));

export default function SideBar(props) {
    const classes = useStyles();

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                {/* <Divider /> */}
                <Box component="div" className={classes.alineadoDerecha}>
                    <List>
                        <ListItem className={classes.itemList}>
                            <LogoIcon className={classes.LogoIcon}></LogoIcon>
                        </ListItem>

                        <ListItem button key='Home' component={Link} to='/' className={classes.itemList}>
                            <ListItemIcon className={classes.coloredText}><HomeOutlined /></ListItemIcon>
                            <ListItemText className={classes.coloredText} primary='Home' />
                        </ListItem>

                        <ListItem button key='Squad' component={Link} to='/squad' className={classes.itemList}>
                            <ListItemIcon className={classes.coloredText}><GroupOutlined /></ListItemIcon>
                            <ListItemText className={classes.coloredText} primary='Squad' />
                        </ListItem>

                        <ListItem button key='Profile' component={Link} to='/profile' className={classes.itemList}>
                            <ListItemIcon className={classes.coloredText}><PersonOutlined /></ListItemIcon>
                            <ListItemText className={classes.coloredText} primary='Profile' />
                        </ListItem>

                    </List>
                </Box>
            </Drawer>
            <Box component="main" className={classes.content}>
                {props.children}
            </Box>
        </Box>
    );
}