import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Typography from "@material-ui/core/Typography";
import { PostAdd } from "@material-ui/icons";

import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const CrearPost = () => {
  const classes = useStyles();

  const [post, setPost] = useState({
    creador: "",
    permanencia: "",
    juego: "",
    cuerpo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        width: "100%",
        margin: "1.2%",
        borderRadius: "10px",
        padding: "15px",
        alignContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
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
                  name="juego"
                  labelId="selectJuego-label"
                  id="selectJuego"
                  required
                  value={post.juego}
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
              name="permanencia"
              label="Horas de duracion del post"
              type="number"
              value={post.permanencia}
              onChange={handleChange}
              required
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
            name="cuerpo"
            label="Mensaje"
            required
            placeholder="ej. Quien para un lolsito"
            multiline
            value={post.cuerpo}
            onChange={handleChange}
            variant="filled"
          />
        </Box>

        <Box display="flex" flexDirection="row-reverse" m={1}>
          <Box>
            <Button
              variant="contained"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
            >
              Publicar
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default CrearPost;
