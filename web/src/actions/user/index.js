import axios from 'axios';

import * as types from './types';

export const user_login = (username, success, fail) => async dispatch => {
    const req = axios.post('/auth', { name: username });
    req.cb = {
        success: success,
        fail: fail
    };
    dispatch({ type: types.USER_LOGIN, payload: req });
};

export const user_fetch_me = (success, fail) => async dispatch => {
    const req = axios.get('/users/me');
    req.cb = {
        success: success,
        fail: fail
    };
    dispatch({ type: types.USER_LOGIN, payload: req });
};

export const user_logout = () => async dispatch => {
    const req = axios.patch('/auth/logout');
    dispatch({ type: types.USER_LOGIN, payload: null });
};