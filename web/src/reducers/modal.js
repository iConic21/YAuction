import * as types from './../actions/modal/types';

export default function (state = { content: '', classList: '' }, action) {
    switch (action.type) {
        case types.MODAL_SHOW:
            var elems = document.querySelectorAll('.modal');
            var instances = window.M.Modal.init(elems, {});
            instances[0].open();
            return action.payload;
        case types.MODAL_HIDE:
            var elems = document.querySelectorAll('.modal');
            var instances = window.M.Modal.init(elems, {});
            instances[0].close();
            return { content: '', classList: '' };
        default:
            return state;
    }
}