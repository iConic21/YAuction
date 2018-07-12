import { combineReducers } from 'redux';
import modal from './modal';
import user from './user';
import items from './items';

export default combineReducers({
    modal,
    user,
    items
});