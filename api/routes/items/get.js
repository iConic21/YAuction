const core = require('./../../core');

module.exports = (apiRoutes) => {
    apiRoutes.get('/', core.services.auth.auth, core.services.item.getItems);
    apiRoutes.get('/:id/bid', core.services.auth.auth, core.services.bid.getBid);
    apiRoutes.get('/:id/bid/winner', core.services.auth.auth, core.services.bid.getBidWinner);
    return apiRoutes;
}
