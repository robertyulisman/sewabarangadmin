import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './Utils/setAuthToken';
import {
    setCurrentUser,
    logoutUser,
} from './Configs/Redux/actions/authActions';
import jwt_decode from 'jwt-decode';

//check for token
if (localStorage.jwtToken) {
    // set auth token header auth
    setAuthToken(localStorage.jwtToken);
    //decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    //check for expired token
    const currenTime = Date.now() / 1000;
    if (decoded.exp < currenTime) {
        // log out user
        store.dispatch(logoutUser());

        //redirect to login
        window.location.href = '/';
    }
}

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/" exact>
                    <LoginPage />
                </Route>
                <Route path="/home">
                    <HomePage />
                </Route>
            </Router>
        </Provider>
    );
}

export default App;
