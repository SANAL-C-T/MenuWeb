import React, { useEffect, useState } from "react";
import style from "./Buttons.module.css";
const baseUrl = import.meta.env.VITE_API_URL;
import axios from "axios";

const Buttons = ({ setMenuData, categories }) => {
  const [selectedCat, setSelectedCat] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      if (!selectedCat) return; // Avoid fetching if no category is selected
      try {
        const response = await axios.post(`${baseUrl}/getMenu`, { selectedCat });
        setMenuData(response.data.data);
      } catch (error) {
        console.error("Error fetching Menu items:", error);
      }
    };

    fetchCategories();
  }, [selectedCat]);

  return (
    <div className={style.buttons}>
      <div className={style.buttonContainer}>
        {categories.map((category) => (
          <button
            className={`${style.Clickbutton} ${
              selectedCat === category._id ? style.active : ""
            }`} 
            key={category._id}
            value={category._id}
            onClick={() => setSelectedCat(category._id)} 
          >
            {category.categoryName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
