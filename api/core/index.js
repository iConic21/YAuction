module.exports.config = require('./../config');
module.exports.express = require('express');
module.exports.promise = require('promise');
module.exports.bodyParser = require('body-parser');
module.exports.cookieParser = require('cookie-parser');
module.exports.cookieSession = require('cookie-session');
module.exports.request = require('request');
module.exports.mongoose = require('mongoose');
module.exports.mongodb = require('mongodb');
module.exports.mongoose.connect(module.exports.config.mongodb.connectionString);
module.exports.db = module.exports.mongoose.connection;
module.exports.db.on('error', console.error.bind(console, 'connection error:'));
module.exports.db.once('open', console.info.bind(console, 'Connected to mongodb'));

module.exports.app = module.exports.express();
module.exports.app.use(module.exports.bodyParser.json());
module.exports.app.use(module.exports.cookieParser());
module.exports.app.use(module.exports.cookieSession({
    name: 'session',
    keys: module.exports.config.sessionCookie.keys
}));

module.exports.http = require('http').Server(module.exports.app);
module.exports.io = require('socket.io')(module.exports.http);

module.exports.app.use(function (req, res, next) { // simulate 2 second delay in all calls
    //setTimeout(function () {
        return next();
    //}, 2000);
});

module.exports.schema = require('./../schemas');
module.exports.stores = require('./../stores');
module.exports.services = require('./../services');
module.exports.routes = require('./../routes');