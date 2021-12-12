import md5 from 'md5';
import axios from 'axios';

const BASE_URL = 'https://gateway.marvel.com/v1/public/';

const publicKey = '45bf32e6ae22e0efec71a1b600f7ce84';
const privateKey = 'd00073deae310f531dfcefbe863a735b240213e4';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

// console.log(`${BASE_URL}characters?ts=${time}&apikey=${publicKey}&hash=${hash}`);

const resultAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    ts: time,
    apikey: publicKey,
    hash,
  },
});

export default resultAPI;
