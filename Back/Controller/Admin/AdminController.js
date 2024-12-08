const adminData = require("../../Model/AdminModel");
const categoryData = require("../../Model/CategoryModel");
const menuData = require("../../Model/MenuModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const key= process.env.JWT_SECRET;

const login = async (req, res) => {
    try {
        const inputname = req.body.name;
        const inputpassword = req.body.password;

        const user = await adminData.findOne({ Name: inputname });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(inputpassword, user.Password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const token = jwt.sign({ admin: user.Name }, key, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful',token});
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

const AddCategory = async (req, res) => {
    try {
        const categoryName = req.body.categoryName;
        const existingCategory = await categoryData.findOne({ categoryName: categoryName });

        if (!existingCategory) {
            const newCat = new categoryData({
                categoryName: categoryName
            });
            await newCat.save();
            res.status(200).json({ message: 'Category added successfully' });
        } else {
            res.status(401).json({ message: 'Category already exists' });
        }
    } catch (error) {
        console.error("Error adding category:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

const AddMenuItem = async (req, res) => {
    try {
        const name = req.body.name;
        const description = req.body.description;
        const category = req.body.category;
        const price = req.body.price;

        console.log({ name, description, category, price });
        const existingItem = await menuData.findOne({ Item_Name: name });
        if (!existingItem) {
            const newMenu = new menuData({
                Item_Name: name,
                Description: description,
                Price: price,
                Category: category,
            });
            await newMenu.save();
            res.status(200).json({ message: 'added successfully' });
        } else {
            res.status(401).json({ message: 'Item already exists' });
        }


    } catch (error) {
        console.error("Error in adding:", error);
        res.status(500).json({ message: 'Server error' });
    }
};


const getCategory = async (req, res) => {
    try {
        let allCategory = await categoryData.find({})
        res.status(200).json({ data: allCategory });
    } catch (error) {
        console.error("Error in adding:", error);
        res.status(500).json({ message: 'Server error' });
    }
};




module.exports = { login, AddCategory, AddMenuItem, getCategory };
