import Axios from 'axios';

const url = 'http://localhost:9000';

export const getPreguntas = () => {
    return Axios.get(url + '/dev/preguntas')
};

export const getQuestion = () => {
    return Axios.get(url + '/dev/question')
};