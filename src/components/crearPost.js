import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CrearPost = () => {
  const classes = useStyles();
  const [juego, setJuego] = React.useState("");

  const handleChange = (event) => {
    setJuego(event.target.value);
  };
  return (
    <div
      style={{
        width: "100%",
        margin: "10px",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "15px",
        alignContent: "center",
      }}
    >
      <Box display="flex" p={1}>
        <Box p={1} flexGrow={1}>
          <Box>
            <Typography variant="h3" gutterBottom>
              Crear Post
            </Typography>
          </Box>
          <Box>
            <FormControl className={classes.formControl}>
              <InputLabel id="selectJuego-label">Juego</InputLabel>
              <Select
                labelId="selectJuego-label"
                id="selectJuego"
                value={juego}
                onChange={handleChange}
              >
                <MenuItem value={"Apex Legends"}>Apex Legends</MenuItem>
                <MenuItem value={"Rocket league"}>Rocket League</MenuItem>
                <MenuItem value={"Warzone"}>Warzone</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box p={1}>
          <TextField
            style={{ float: "right" }}
            id="filled-number"
            label="Horas de duracion del post"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </Box>

      <Box display="flex" p={1}>
        <TextField
          style={{ width: "100%" }}
          id="filled-textarea"
          label="Mensaje"
          placeholder="ej. Quien para un lolsito"
          multiline
          variant="filled"
        />
      </Box>
    </div>
  );
};

export default CrearPost;
