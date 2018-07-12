const core = require('./../../core');

module.exports = (apiRoutes) => {
    apiRoutes.get('/me', core.services.auth.auth, core.services.user.getMe);

    return apiRoutes;
}
