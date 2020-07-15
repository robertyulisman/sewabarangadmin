import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducers';
import dataReducer from './dataReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    data: dataReducer,
});
