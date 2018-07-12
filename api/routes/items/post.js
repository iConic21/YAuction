const core = require('./../../core');

module.exports = (apiRoutes) => {
    apiRoutes.post('/', core.services.auth.auth, core.services.item.createItem);
    apiRoutes.post('/:id/bid', core.services.auth.auth, core.services.bid.addBid);

    return apiRoutes;
}
