const menuData = require("../../Model/MenuModel")

const getMenu = async (req, res) => {
    try {
        let requestedCat = req.body.selectedCat;
        console.log("request::::", req.body.selectedCat)
        let menus = await menuData.find({
            Category: requestedCat
        })
        console.log("request::::", menus)
        res.status(200).json({ data: menus });

    } catch (error) {
        console.error("Error in adding:", error);
        res.status(500).json({ message: 'Server error' });
    }
};




module.exports = { getMenu };