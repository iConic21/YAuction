const core = require('./../../core');

const addBid = (value, userId) => {
    return new core.promise((resolve, reject) => {
        var bid = new core.schema.bid({ value, by: userId });
        return bid.save((err, bid) => {
            if (err) return reject(err);
            return resolve(bid);
        })
    });
}

const getBids = (itemId) => {
    return new core.promise((resolve, reject) => {
        return core.schema.item.findOne({_id: itemId}).populate('bids').select('bids').exec((err, bids) => {
            if (err) return reject(err);
            return resolve(bids);
        })
    });
}

const getHighestBid = (id) => {
    return new core.promise((resolve, reject) => {
        return core.schema.item.findOne({_id: id}).select(['bids', 'currentValue']).populate('bids', '_id value by', null, { sort: { 'value': -1 } }).populate('bids.by').exec((err, item) => {
            if (err) return reject(err);
            return resolve(item.bids.length > 0 ? item.bids[0] : item.currentValue);
        })
    });
}

module.exports = {
    addBid,
    getBids,
    getHighestBid
}