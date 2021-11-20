import { TableBody } from "@material-ui/core";
import {axiosBase as axios} from "./config";

export const create = async (TestObj)=> {
    try{
        
        const response = await axios.post("/user", TestObj)
        console.warn("Momo, respondieron", response)
        
    }
    catch(error){
        console.error('Momo, No funciono',error);
        return error
    }
    
}

export const GetPerfil = async ()=> {
    try{
        
        const response = await axios.get("/user", '61988da3ad5209d2611ded42')
        console.warn("Momo, respondieron", response)
        return response.data
    }
    catch(error){
        console.error('Momo, No funciono',error);
        return error
    }
    
}

export const getPosts = async ()=> {
    try{
        
        const response = await axios.get("/posti")
        console.warn("Momo, respondieron", response)
        return response.data
    }
    catch(error){
        console.error('Momo, No funciono',error);
        return error
    }
    
}

export const MakePosts = async (UserPost)=> {
    try{
        
        const response = await axios.post("/posti", UserPost)
        console.warn("Momo, respondieron", response)
       // return response.data
    }
    catch(error){
        console.error('Momo, No funciono',error);
        return error
    }
    
}