const core = require('./../../core');

module.exports = (apiRoutes) => {
    apiRoutes.post('/', core.services.user.login);

    return apiRoutes;
}
