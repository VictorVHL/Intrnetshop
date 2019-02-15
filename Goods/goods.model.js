const mongoose = require('mongoose');

const GoodsSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        require : true
    },
    Category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category'
}
});






module.exports = mongoose.model('Goods', GoodsSchema);