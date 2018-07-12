const core = require('./../../core');

const _addBid = (itemId, value, userId) => {
    return new core.promise((resolve, reject) => {
        return core.stores.bid.addBid(value, userId).then(bid => {
            core.stores.item.addBid(itemId, bid._id).then(() => {
                return resolve(bid);
            }, err => {
                return reject(err, 500);
            })
        }, err => {
            return rejectr(err, 500);
        })
    });
    
}

const addBid = (req, res) => {
    req.body.value = parseInt(req.body.value);
    core.stores.bid.getHighestBid(req.params.id).then(MaxBid => {
        if (MaxBid.value != null && MaxBid.value >= req.body.value) return updateItemCurrentValue(req.params.id, req.body.value += 0.50, req, res);

        var newValue = (MaxBid.value || MaxBid) + 0.50;
        _addBid(req.params.id,  req.body.value, req.session.user._id).then(bid => {
            updateItemCurrentValue(req.params.id, newValue, req, res);
        }, err => {
            return res.Error(err, 500);
        });
    }, err => {
        return res.Error(err, 500);
    })
}

const getBid = (req, res) => {
    core.stores.bid.getBids(req.params.id).then(item => {

        var bids = item.bids;
        for (var i = 0; i < bids.length; i++) {
            bids[i].value = 0;
        }
        return res.Ok(item);
    }, err => {
        return res.Error(err, 500);
    })
}

const updateItemCurrentValue = (itemId, newValue, req, res) => {
    core.stores.item.updateCurrentValue(itemId, newValue).then(() => {
        return res.Ok({
            itemId: itemId,
            newValue: newValue
        });
    }, err => {
        return res.Error(err, 500);
    })
}

const getBidWinner = (req, res) => {
    core.stores.bid.getHighestBid(req.params.id).then(MaxBid => {
        if (!MaxBid.by) return res.Ok(null);
        core.stores.user.getUserById(MaxBid.by).then(user => {
            return res.Ok(user.name);
        }, err => {
            return res.Error(err, 500);
        })
    }, err => {
        return res.Error(err, 500);
    })
}

module.exports = {
    addBid,
    getBid,
    getBidWinner
}