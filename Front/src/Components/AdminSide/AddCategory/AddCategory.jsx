import React, { useRef } from "react";
import style from "./AddCategory.module.css";
const baseUrl = "https://menuweb2.onrender.com";
import axios from "axios";

const AddCategory = () => {
  const categoryNameRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryName = categoryNameRef.current.value;
    if (!categoryName.trim()) {
      alert("Category name is required!");
    } else {
      try {
        const response = await axios.post(`${baseUrl}/AddCategory`, {
          categoryName,
        });

        if (response.status === 200) {
          alert("Saved successfully!");
          console.log("Response data:", response.data);
        } else {
          alert("Not saved.");
        }
      } catch (error) {
        console.error("Error :", error);
        alert("An error occurred");
      }

      alert(`Category "${categoryName}" added successfully!`);
    }
  };

  return (
    <div className={style.AddCategory}>
      <h2>Add the Category of Menu</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="categoryName">Category Name:</label>
          <input
            className={style.AddInputs}
            type="text"
            id="categoryName"
            placeholder="Enter category name"
            ref={categoryNameRef}
          />
        </div>
        <button className={style.AddCategoryBtn} type="submit">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
