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

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap",
    height: 130,
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FilterBar() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
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
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Ninguno</em>
            </MenuItem>
            <MenuItem value={10}>Apex Legends</MenuItem>
            <MenuItem value={20}>Rocket League</MenuItem>
            <MenuItem value={30}>Warzone</MenuItem>
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
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Ninguna</em>
            </MenuItem>
            <MenuItem value={10}>PC(Steam)</MenuItem>
            <MenuItem value={20}>PlayStation</MenuItem>
            <MenuItem value={30}>Xbox</MenuItem>
            <MenuItem value={40}>Nintendo Switch</MenuItem>
          </Select>
          <FormHelperText>Plataforma en la que juega</FormHelperText>
        </FormControl>

        <form className={classes.formControl} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Nivel en el Juego" />
        </form>
      </Paper>
    </div>
  );
}
