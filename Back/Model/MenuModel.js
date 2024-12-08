const mongoose = require("mongoose");

require("./Config");

const MenuSchema = mongoose.Schema({
    Item_Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuCatgory'
    }

});

const Menu_Data = mongoose.model("Menu", MenuSchema);

module.exports = Menu_Data;