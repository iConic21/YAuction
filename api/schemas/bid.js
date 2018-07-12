const core = require('./../core');

module.exports = core.mongoose.Schema({
    value: Number,
    by: {
        type: core.mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdOn: { 
        type : Date, 
        default: Date.now 
    }
});