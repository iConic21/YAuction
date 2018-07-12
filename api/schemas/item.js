const core = require('./../core');

module.exports = core.mongoose.Schema({
    name: String,
    description: String,
    currentValue: Number,
    image: String,
    bids: [
        {
            type: core.mongoose.Schema.Types.ObjectId,
            ref: 'Bid'
        }
    ],
    endsOn: { 
        type : Date, 
        default: Date.now 
    },
    createdBy: {
        type: core.mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdOn: { 
        type : Date, 
        default: Date.now 
    },
    updatedOn: { 
        type : Date, 
        default: Date.now 
    }
});