const mongoose = require("mongoose");

require("./Config");

const AdminSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
 
});

const Admin_Data = mongoose.model("MenuAdmins", AdminSchema);

module.exports = Admin_Data