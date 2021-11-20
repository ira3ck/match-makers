import React, { Fragment } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Posteo from "../components/posteo";
import FilterBar from "../components/filterBar";
import BannerInicio from "../components/BannerInicio";
import CrearPost from "../components/crearPost";
import { getPosts } from "../api/MMapi";
import {useState} from 'react';
const useStyles = makeStyles((theme) => ({
  espacio: {
    marginTop: theme.spacing(3),
  },
  container: {
    backgroundColor: "rgb(50, 50, 50)",
  },
}));

const Index = () => {
    const [allPosts, setPost] = useState([])
    useState(() => {
        async function getAllPost(){
            const allPosts = await getPosts();
            setPost(allPosts)
           
        }
        getAllPost()      
    }, []);
    const classes = useStyles();
    return (
        <Fragment>
            <Box component="div" className={classes.container}>
                <BannerInicio></BannerInicio>
                <Container>
                    <CrearPost></CrearPost>
                    <FilterBar></FilterBar>
                    {allPosts.map((item, index)=>(
                       // posteo.gameName = item.juego
                        <div className={classes.espacio}>
                            <Posteo posteo={item}></Posteo>
                        </div>
                    ))}
                    
                   
                </Container>
            </Box>
        </Fragment>

    )
}

export default Index;
