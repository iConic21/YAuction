const core = require('./../../core');
const jwt = require('jsonwebtoken');

function getToken(user) {
    return new core.promise(function (resolve, reject) {
        var accessToken = jwt.sign(user, core.config.jwt.secret, { expiresIn: core.config.jwt.duration });
        var refreshToken = jwt.sign(user._id.toString(), core.config.jwt.refreshSecret, {});
        resolve({
            accessToken,
            refreshToken
        });
    });
}

function validateToken(req, res, token, refreshToken) {
    return new core.promise(function (resolve, reject) {
        try {
            var decoded = jwt.verify(token, core.config.jwt.secret);
            delete decoded.exp;
            delete decoded.iat;
            resolve({
                decoded: decoded
            });
        } catch (err) {
            try {
                var decoded = jwt.verify(refreshToken, core.config.jwt.refreshSecret);
                delete decoded.exp;
                delete decoded.iat;

                core.store.user.valid(decoded).then((user) => {
                    getToken(user).then((tokens) => {
                        resolve({
                            decoded: user,
                            accessToken: tokens.accessToken,
                            refreshToken: tokens.refreshToken
                        });
                    });
                }, () => {
                    reject('Failed to authenticate token.');
                })
            } catch (err) {
                reject('Failed to authenticate token.');
            }
        }
    });
}

function decodeToken(token) {
    return new core.promise(function (resolve, reject) {
        try {
            var decoded = jwt.verify(token, core.config.jwt.secret);
            delete decoded.exp;
            delete decoded.iat;
            resolve(decoded);
        } catch (err) {
            reject('Failed to authenticate token.');
        }
    });
}

module.exports = {
    getToken,
    validateToken,
    decodeToken
}