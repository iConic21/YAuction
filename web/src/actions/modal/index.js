import * as types from './types';

export const modal_show = (content, classList) => async dispatch => {
    dispatch({ type: types.MODAL_SHOW, payload: {
        content,
        classList
    } });
};

export const modal_hide = () => async dispatch => {
    dispatch({ type: types.MODAL_HIDE, payload: null });
};