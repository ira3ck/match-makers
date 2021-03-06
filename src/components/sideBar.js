import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import {
    Avatar,
    Box,
    Divider,
    Grid,
    Paper,
    Popover,
    Typography,
} from "@material-ui/core";
import LogoIcon from "./LogoIcon";
import {
    GroupOutlined,
    HomeOutlined,
    MoreHoriz,
    PersonOutlined,
    PowerSettingsNew,
    Settings,
} from "@material-ui/icons";
import { useAuth0 } from "../hooks/react-auth0-spa";


const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    alineadoDerecha: {
        display: "flex",
        justifyContent: "flex-end",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    coloredText: {
        color: "aliceblue",
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "rgb(0,0,0)",
        paddingRight: theme.spacing(3),
    },
    itemList: {
        marginBottom: theme.spacing(3),
        borderRadius: "50px",
    },
    toolbar: theme.mixins.toolbar,
    content: {
        backgroundColor: theme.palette.background.default,
    },
    paperOptions: {
        backgroundColor: "#000",
        boxShadow: "0 10px 20px aliceblue",
        WebkitBoxShadow: "0 10px 20px aliceblue",
        MozBoxShadow: "0 10px 20px aliceblue",
    },
}));

const SideBar = (props) => {
    const classes = useStyles();

    const profile = {
        picture: "../img/654978.jpg",
        nickname: "ira3ck",
        squad: "Supermegasquad",
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const { isLoading } = useAuth0();


    if (isLoading === null) {
        return <div>Loading ...</div>;
    }

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

                <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="flex-end"
                    style={{ height: "100%" }}
                >
                    <Grid item>
                        <List>
                            <ListItem className={classes.itemList}>
                                <LogoIcon className={classes.LogoIcon}></LogoIcon>
                            </ListItem>

                            <ListItem
                                button
                                key="Home"
                                component={Link}
                                to="/"
                                className={classes.itemList}
                            >
                                <ListItemIcon className={classes.coloredText}>
                                    <HomeOutlined />
                                </ListItemIcon>
                                <ListItemText className={classes.coloredText} primary="Home" />
                            </ListItem>

                            <ListItem
                                button
                                key="Squad"
                                component={Link}
                                to="/squad"
                                className={classes.itemList}
                            >
                                <ListItemIcon className={classes.coloredText}>
                                    <GroupOutlined />
                                </ListItemIcon>
                                <ListItemText className={classes.coloredText} primary="Squad" />
                            </ListItem>

                            <ListItem
                                button
                                key="Profile"
                                component={Link}
                                to="/profile"
                                className={classes.itemList}
                            >
                                <ListItemIcon className={classes.coloredText}>
                                    <PersonOutlined />
                                </ListItemIcon>
                                <ListItemText
                                    className={classes.coloredText}
                                    primary="Profile"
                                />
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item>
                        <ListItem
                            button
                            className={classes.itemList}
                            aria-describedby={id}
                            onClick={handleClick}
                        >
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                    <Avatar alt="Profile Pic" src={profile.picture}></Avatar>
                                </Grid>
                                <Grid item>
                                    <Typography style={{ marginLeft: "15px" }}>
                                        {profile.nickname}
                                    </Typography>
                                    <Typography style={{ marginLeft: "15px", fontSize: "small" }}>
                                        {profile.squad}
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <MoreHoriz style={{ marginLeft: "25px" }} />
                                </Grid>
                            </Grid>
                        </ListItem>
                    </Grid>
                </Grid>

                <div className={classes.toolbar} />
            </Drawer>
            <Box component="main" className={classes.content}>
                {props.children}
            </Box>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
            >
                <Paper className={classes.paperOptions}>
                    <List>
                        <ListItem
                            button
                            key="Preferences"
                            component={Link}
                            to="/preferences"
                            onClick={handleClose}
                        >
                            <ListItemIcon className={classes.coloredText}>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText
                                className={classes.coloredText}
                                primary="Preferencias"
                            />
                        </ListItem>
                        <Divider />
                        <ListItem
                            button
                            key="Logout"
                            component={Link}
                            to="/logout"
                            onClick={handleClose}
                        >
                            <ListItemIcon className={classes.coloredText}>
                                <PowerSettingsNew />
                            </ListItemIcon>
                            <ListItemText
                                className={classes.coloredText}
                                primary="Cerrar sesi??n"
                            />
                        </ListItem>
                    </List>
                </Paper>
            </Popover>
        </Box>
    );
}

export default SideBar;
