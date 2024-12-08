const express = require("express");
const allRoute = express.Router(); 
const userController = require("../Controller/user/UserController");
const adminController=require("../Controller/Admin/AdminController")


allRoute.post("/login",adminController.login);
allRoute.post("/AddCategory",adminController.AddCategory);
allRoute.get("/getCategory",adminController.getCategory);
allRoute.post("/AddMenuItem",adminController.AddMenuItem);

allRoute.post("/getMenu",userController.getMenu);

module.exports = allRoute; 