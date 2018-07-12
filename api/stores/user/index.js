const core = require('./../../core');

const createUser = (name) => {
    return new core.promise((resolve, reject) => {
        var user = new core.schema.user({ name });
        return user.save((err, user) => {
            if (err) return reject(err);
            return resolve(user);
        })
    });
}

const getUserById = (id) => {
    return new core.promise((resolve, reject) => {
        return core.schema.user.findOne({ _id: id }).exec((err, user) => {
            if (err) return reject(err);
            return resolve(user);
        })
    });
}

const getUserByName = (name) => {
    return new core.promise((resolve, reject) => {
        return core.schema.user.findOne({ name }).exec((err, user) => {
            if (err) return reject(err);
            return resolve(user);
        })
    });
}

module.exports = {
    createUser,
    getUserById,
    getUserByName
}