import * as types from './../actions/items/types';

export default function (state = [], action) {
    switch (action.type) {
        case types.ITEMS_FETCH:
            return action.payload;
        case types.ITEMS_ADD:
            return [...[action.payload], ...state];
        case types.ITEMS_ADD_BID:
            return state.map(item => {return item._id == action.payload.itemId ? {...item, currentValue: action.payload.newValue} : item});
        default:
            return state;
    }
}