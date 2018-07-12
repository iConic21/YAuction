const core = require('./../../core');

const response = (data = {}, success = true, error = {}) => {
    var payload = {
        success: success,
        serverTime: new Date().toJSON()
    }

    return success ? {...payload, ...{data: data}} : {...payload, ...{error: error}};
}

const responseOk = (payload, res) => {
    return res.status(200).json(response(payload));
}

const reponseError = (payload, status = 500, res) => {
    return res.status(status).json(response(null, false, payload));
}

core.app.use((req, res, next) => {
    res.Ok = payload => {
        return responseOk(payload, res);
    }
    res.Error = (payload, status) => {
        return reponseError(payload, status, res);
    }
    req.Validate = (source, params) => {
        for (var i = 0, len = params.length; i < len; i++) {
            if (source[params[i]] == null || source[params[i]] == "") {
                return false;
            }
        }
        return true;
    }
    return next();
});