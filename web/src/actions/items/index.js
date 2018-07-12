import axios from 'axios';

import * as types from './types';

export const items_fetch = (success, fail) => async dispatch => {
    const req = axios.get('/items');
    req.cb = {
        success: success,
        fail: fail
    };
    dispatch({ type: types.ITEMS_FETCH, payload: req });
};

export const items_add = (payload, success, fail) => async dispatch => {
    const req = axios.post('/items', payload);
    req.cb = {
        success: success,
        fail: fail
    };
    dispatch({ type: types.ITEMS_ADD, payload: req });
};

export const items_add_bid = (id, payload, success, fail) => async dispatch => {
    const req = axios.post('/items/' + id + '/bid', payload);
    req.cb = {
        success: success,
        fail: fail
    };
    dispatch({ type: types.ITEMS_ADD_BID, payload: req });
};

export const items_fetch_bid_winner = (id, success, fail) => async dispatch => {
    const req = axios.get('/items/' + id + '/bid/winner');
    req.cb = {
        success: success,
        fail: fail
    };
    dispatch({ type: types.ITEMS_FETCH_BID_WINNER, payload: req });
};