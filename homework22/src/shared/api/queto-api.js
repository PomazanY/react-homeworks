import axios from "axios"

const quetoInstance = axios.create({
    baseURL: 'https://zenquotes-proxy.onrender.com/api/random'
});

export const getQuetoApi = async () => {
    const { data } = await quetoInstance.get('/');
    return data;
}



