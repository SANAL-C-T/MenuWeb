const mongoose = require("mongoose");

require("./Config");

const CategorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },


});

const Category_Data = mongoose.model("MenuCatgory", CategorySchema);

module.exports = Category_Data;