import Axios from 'axios';

<<<<<<< HEAD
=======

>>>>>>> 0fb806a058f0ee7d467feb89386ae17d87268321
export const getPreguntas = () => {
    return Axios.get('https://mcafye3c94.execute-api.us-east-1.amazonaws.com/getTarjetas')
};

export const getQuestion = () => {
    return Axios.get('https://mcafye3c94.execute-api.us-east-1.amazonaws.com/getQuestion')
};
