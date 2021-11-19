import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { createTheme, ThemeProvider } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "aliceblue",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(5),
      width: "100%",
      height: theme.spacing(16),
    },
  },
  typography: {
    margin: theme.spacing(2),
    textAlign: "left",
    maxWidth: 500,
    fontSize: 50,
    color: "white",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap",
    maxHeight: "500px",
    height: 130,
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selecter: {},
}));

const theme2 = createTheme({
  palette: {
    type: "dark",
  },
});
export default function FilterBar() {
  const classes = useStyles();
  const [game, setGame] = React.useState("");

  const [Plataforma, setPlataforma] = React.useState("");

  const handleChange = (event) => {
    setGame(event.target.value);
  };

  const handleChange2 = (event) => {
    setPlataforma(event.target.value);
  };

  return (
    <ThemeProvider theme={theme2}>
      <div className={classes.root}>
        <Paper
          elevation={3}
          className={classes.paper}
          style={{ borderRadius: 30, backgroundColor: "#5d5a63" }}
        >
          <Grid item xs container direction="column" spacing={2}>
            <Typography
              gutterBottom
              variant="subtitle1"
              className={classes.typography}
            >
              FILTROS
            </Typography>
          </Grid>
          {/* FORM Select Juego que jugaras */}

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Juego</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={game}
              onChange={handleChange}
              className={classes.selecter}
            >
              <MenuItem value="">
                <em>Ninguno</em>
              </MenuItem>
              <MenuItem value={"Apex Legends"}>Apex Legends</MenuItem>
              <MenuItem value={"Rocket League"}>Rocket League</MenuItem>
              <MenuItem value={"Warzone"}>Warzone</MenuItem>
            </Select>
            <FormHelperText>Juego por el que desea buscar</FormHelperText>
          </FormControl>

          {/* FORM Select Juego que jugaras */}

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">
              Plataforma
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={Plataforma}
              onChange={handleChange2}
            >
              <MenuItem value="">
                <em>Ninguna</em>
              </MenuItem>
              <MenuItem value={"PC(Steam)"}>PC(Steam)</MenuItem>
              <MenuItem value={"PlayStation"}>PlayStation</MenuItem>
              <MenuItem value={"Xbox"}>Xbox</MenuItem>
              <MenuItem value={"Nintendo Switch"}>Nintendo Switch</MenuItem>
            </Select>
            <FormHelperText className={classes.whiteText}>
              Plataforma en la que juega
            </FormHelperText>
          </FormControl>

          <form className={classes.formControl} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Nivel en el Juego"
              className={classes.whiteText}
            />
          </form>
        </Paper>
      </div>
    </ThemeProvider>
  );
}
