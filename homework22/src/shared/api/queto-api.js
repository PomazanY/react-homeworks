import axios from "axios"

// const quetoInstance = axios.create({
//     baseURl: 'https://zenquotes.io/api/random'
// });

const quetoInstance = axios.create({
    baseURl: 'https://api.thedogapi.com/v1/breeds'
});

export const getQuetoApi = async () => {
    const { data } = await quetoInstance.get('/');
    return data;
}



