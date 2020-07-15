import axios from 'axios';
import { GET_COUNTRY, GET_GENRE } from './types';

// login user
export const getGenre = () => (dispatch) => {
    axios
        .get('/api/genre')
        .then((res) => {
            console.log('genre data', res.data);
            dispatch({ type: GET_GENRE, paylod: res.data });
        })
        .catch((err) => console.log('error get genre', err));
};
