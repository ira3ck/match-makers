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
import { MakePosts } from "../api/MMapi";
import { useAuth0 } from "../hooks/react-auth0-spa";

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
  const  RegularFunction =  async (postSend)=>{
    postSend.creador = user.nickname;
    postSend.picture = user.picture;
    await MakePosts(postSend)
  };
  const classes = useStyles();
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const [post, setPost] = useState({
    creador: "",
    permanencia: "",
    juego: "",
    cuerpo: "",
    categoria: "",
    picture: ""
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
    
    RegularFunction(post)
  };
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  
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
                  <MenuItem value={"Valorant"}>Valorant</MenuItem>
                  <MenuItem value={"League of Legends"}>League of Legends</MenuItem>
                  <MenuItem value={"Team Fight Tactics"}>Team Fight Tactics</MenuItem>
                  <MenuItem value={"Fortnite"}>Fortnite</MenuItem>
                  <MenuItem value={"Among Us"}>Among Us</MenuItem>
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel id="selectJuego-label">Categoría</InputLabel>
                <Select
                  name="categoria"
                  labelId="selectCategoria-label"
                  id="selectCategoria"
                  required
                  value={post.categoria}
                  onChange={handleChange}
                >
                  <MenuItem value={"Moba"}>Moba</MenuItem>
                  <MenuItem value={"First Person Shooter"}>First Person Shooter</MenuItem>
                  <MenuItem value={"Estrategia"}>Estrategia</MenuItem>
                  <MenuItem value={"Player vs. Player"}>Player vs. Player</MenuItem>
                  <MenuItem value={"Cooperativo"}>Cooperativo</MenuItem>
                  <MenuItem value={"Battle Royale"}>Battle Royale</MenuItem>
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
              type = "submit"
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