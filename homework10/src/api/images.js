import axios from "axios";

const imagesCats = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/search'
});

export const getImages = async ()=>{
    const {data} = await imagesCats.get('/')

return data[0];
};