import React, { Fragment, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  espacio: {
    marginTop: theme.spacing(3),
  },
  content: {
    padding: theme.spacing(3),
  },
  input: {
    display: "none",
  },
}));

const CrearSquad = () => {
  const classes = useStyles();

  const [squad, setSquad] = useState({
    squad_name: "",
    founder: "",
    squad_pic: "",
    background_squad_pic: "",
    members: [],
    admins: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSquad({
      ...squad,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <div style={{ width: "100%" }}>
        <form autoComplete="off">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            m={1}
            p={1}
          >
            <Box m={2}>
              <Typography variant="h5" gutterBottom>
                Nombre del Squad
              </Typography>
            </Box>
            <Box m={2}>
              <TextField
                required
                name="squad_name"
                id="outlined-basic"
                variant="outlined"
                value={squad.squad_name}
                onChange={handleChange}
                style={{ minWidth: "50vw" }}
              />
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            m={1}
            p={1}
          >
            <Box p={1} m={2}>
              <Typography variant="h5" gutterBottom>
                Imagen del Squad
              </Typography>
            </Box>
            <Box p={1} m={2}>
              <Button variant="contained" component="label">
                Subir Imagen
                <input
                  type="file"
                  hidden
                  value={squad.squad_pic}
                  onChange={handleChange}
                  accept="image/*"
                />
              </Button>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            m={1}
            p={1}
          >
            <Box p={1} m={2}>
              <Typography variant="h5" gutterBottom>
                Imagen de fondo del perfil del Squad
              </Typography>
            </Box>
            <Box p={1} m={2}>
              <Button variant="contained" component="label">
                Subir Imagen
                <input
                  type="file"
                  value={squad.background_squad_pic}
                  onChange={handleChange}
                  hidden
                  accept="image/*"
                />
              </Button>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            m={1}
            p={1}
          >
            <Box p={1} m={2}>
              <Button
                type="submit"
                variant="outlined"
                style={{ width: "50vw" }}
              >
                Crear Squad
              </Button>
            </Box>
          </Box>
        </form>
      </div>
    </Fragment>
  );
};

export default CrearSquad;
