import Axios from 'axios';

const url = 'http://localhost:9000';

export const getPreguntas = () => {
    return Axios.get('https://mcafye3c94.execute-api.us-east-1.amazonaws.com/getTarjetas')
};

export const getQuestion = () => {
    return Axios.get('https://mcafye3c94.execute-api.us-east-1.amazonaws.com/getQuestion')
};