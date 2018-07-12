const core = require('./../core');
const itemSchema = require('./item');
const userSchema = require('./user');
const bidSchema = require('./bid');

module.exports.item = core.mongoose.model('Item', itemSchema);
module.exports.user = core.mongoose.model('User', userSchema);
module.exports.bid = core.mongoose.model('Bid', bidSchema);