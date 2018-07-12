const core = require('./../../core');

const createItem = (name, description, startingPrice, image, user) => {
    return new core.promise((resolve, reject) => {
        var item = new core.schema.item({
            name,
            description,
            currentValue: startingPrice,
            image,
            createdBy: user._id,
            endsOn: new Date(new Date().getTime() + 5 * 60000)
        });
        return item.save((err, item) => {
            if (err) return reject(err);
            return resolve(item);
        })
    });
}

const getItems = () => {
    return new core.promise((resolve, reject) => {
        return core.schema.item.find({}).populate('createdBy').sort('-createdOn').exec((err, items) => {
            if (err) return reject(err);
            return resolve(items);
        })
    });
}

const getItemById = (id) => {
    return new core.promise((resolve, reject) => {
        return core.schema.item.findOne({ _id: id }).populate('createdBy').exec((err, item) => {
            if (err) return reject(err);
            return resolve(item);
        })
    });
}

const addBid = (id, bid) => {
    return new core.promise((resolve, reject) => {
        return core.schema.item.update({ _id: id }, { $push: { bids: bid } }).exec((err, item) => {
            if (err) return reject(err);
            return resolve(item);
        })
    });
}

const updateCurrentValue = (id, value) => {
    return new core.promise((resolve, reject) => {
        return core.schema.item.update({ _id: id }, { currentValue: value }).exec((err, item) => {
            if (err) return reject(err);
            return resolve(item);
        })
    });
}

module.exports = {
    createItem,
    getItems,
    getItemById,
    addBid,
    updateCurrentValue
}