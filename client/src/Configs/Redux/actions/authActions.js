import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../../../Utils/setAuthToken';
import jwt_decode from 'jwt-decode';

// login user
export const loginUser = (userData) => (dispatch) => {
  axios
    .post('/api/admin/login', userData)
    .then((res) => {
      // save to localstorage
      const { token } = res.data;
      // set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to auth header
      setAuthToken(token);
      // decode token to get user data
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

//set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// user log out
export const logoutUser = () => (dispatch) => {
  // remove token from localstorage
  localStorage.removeItem('jwtToken');
  // remove auth header for future requests
  setAuthToken(false);
  // set current user to {} wich will set iaAuthenticated to false
  dispatch(setCurrentUser({}));
};
