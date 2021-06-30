import Axios from 'axios';

export const getPreguntas = () => {
    return Axios.get('https://mcafye3c94.execute-api.us-east-1.amazonaws.com/getTarjetas')
};

export const getQuestion = () => {
    return Axios.get('https://mcafye3c94.execute-api.us-east-1.amazonaws.com/getQuestion')
};