const core = require('./../../core');

const login = (req, res) => {
    core.stores.user.getUserByName(req.body.name).then(user => {
        if (user) return core.services.auth.login(req, res, user);
        core.stores.user.createUser(req.body.name).then(user => {
            return core.services.auth.login(req, res, user);
        }, err => {
            return res.Error(err, 500);
        })
    }, err => {
        return res.Error(err, 500);
    })
}

const getMe = (req, res) => {
    core.stores.user.getUserById(req.session.user._id).then(user => {
        return res.Ok(user);
    }, err => {
        return res.Error(err, 401);
    })
}

module.exports = {
    login,
    getMe
}