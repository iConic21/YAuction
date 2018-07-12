const core = require('./../../core');
const pathName = '/items';

var apiRoutes = core.express.Router();
apiRoutes = require('./post')(apiRoutes);
apiRoutes = require('./get')(apiRoutes);
core.app.use(pathName, apiRoutes);