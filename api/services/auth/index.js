const core = require('./../../core');
const store = core.stores;
const tokenService = require('./token');

function login(req, res, user) {
    user = user.toObject();
    tokenService.getToken(user).then((tokens) => {
        res.cookie('access-token', tokens.accessToken, { maxAge: core.config.jwt.tokenAge, httpOnly: false });
        res.cookie('refresh-token', tokens.refreshToken, { maxAge: core.config.jwt.refreshTokenAge, httpOnly: true });
        req.session.user = user;
        return res.Ok(user);
    });
}

function resetToken(req, res) {
    cookie = req.cookies;
    for (var prop in cookie) {
        if (!cookie.hasOwnProperty(prop)) {
            continue;
        }
        res.cookie(prop, '', { expires: new Date(0) });
    }

    req.session.user = null;
}

function logout(req, res) {
    resetToken(req, res);
    return res.Ok();
}

function auth(req, res, next) {
    if (req.cookies['access-token'] || req.cookies['refresh-token']) {
        tokenService.validateToken(req, res, req.cookies['access-token'], req.cookies['refresh-token']).then((decodedToken) => {
            if (decodedToken.accessToken && decodedToken.refreshToken) {
                res.cookie('access-token', decodedToken.accessToken, { maxAge: core.config.jwt.tokenAge, httpOnly: false });
                res.cookie('refresh-token', decodedToken.refreshToken, { maxAge: core.config.jwt.refreshTokenAge, httpOnly: true });
            }
            store.user.getUserById(decodedToken.decoded._id).then((user) => {
                req.session.user = user;
                return next();
            }, () => {
                return res.Error(null, 401);
            });
        }, (err) => {
            return res.Error(err, 401);
        })
    } else if (req.session && req.session.user) {
        store.user.getUserById(decodedToken.decoded._id).then(() => {
            return next();
        }, () => {
            return res.Error(null, 401);
        });
    } else {
        return res.Error(null, 401);
    }
}

module.exports = Object.assign({
    login,
    logout,
    auth
}, tokenService);