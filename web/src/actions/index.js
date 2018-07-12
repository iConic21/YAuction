import * as modal from './modal';
import * as user from './user';
import * as item from './items';

const actions = Object.assign({}, 
    modal,
    user,
    item
);

export default actions;