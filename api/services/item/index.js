const core = require('./../../core');
const itemImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

const createItem = (req, res) => {
    var image = itemImages[Math.floor(Math.random()*itemImages.length)];
    core.stores.item.createItem(req.body.name, req.body.description, req.body.startingPrice, image, req.session.user).then(item => {
        core.stores.item.getItemById(item._id).then(item => {
            return res.Ok(item);
        }, err => {
            return res.Error(err, 500);
        });
    }, err => {
        return res.Error(err, 500);
    });
}

const getItems = (req, res) => {
    core.stores.item.getItems().then(items => {
        return res.Ok(items);
    }, err => {
        return res.Error(err, 500);
    })
}

module.exports = {
    createItem,
    getItems
}