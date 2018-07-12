import * as types from './../actions/user/types';

export default function (state = null, action) {
    switch (action.type) {
        case types.USER_LOGIN:
            return action.payload;
        default:
            return state;
    }
}