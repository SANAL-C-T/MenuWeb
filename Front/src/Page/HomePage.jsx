import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import MenuBanner from "../Components/MenuBanner/MenuBanner";
import Buttons from "../Components/Buttons/Buttons";
import MenuDesc from "../Components/MenuDescription/MenuDesc";
import Footer from "../Components/Footer/Footer";
const baseUrl = "https://menuweb2.onrender.com";
import axios from "axios";

const HomePage = () => {
  const [menuData, setMenuData] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/getCategory`);
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);


console.log("menuData:::",menuData)

  return (
    <div>
      <Navbar />
      <MenuBanner />
      <Buttons setMenuData={setMenuData} categories={categories}/>
      <MenuDesc menuData={menuData} />
      <Footer />
    </div>
  );
};

export default HomePage;
