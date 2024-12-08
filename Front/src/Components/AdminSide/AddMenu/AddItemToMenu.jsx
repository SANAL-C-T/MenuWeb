import React, { useEffect, useRef, useState } from "react";
import style from "./Additem.module.css";
const baseUrl = "https://menuweb2.onrender.com";
import axios from "axios";

const AddItemToMenu = () => {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const priceRef = useRef(null);
  const formRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [nameValid, setNameValid] = useState(true);
  const [descValid, setDescValid] = useState(true);
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

  console.log(categories);
  const handleFormData = async (event) => {
    event.preventDefault();

    const name = nameRef.current.value.trim();
    const description = descriptionRef.current.value.trim();
    const category = categoryRef.current.value;
    const price = priceRef.current.value;

    setNameValid(/^[A-Za-z]+$/.test(name));
    setDescValid(/^[A-Za-z]+$/.test(description));

    if (!nameValid || !descValid || !category || !price) {
      alert("Please fill out all fields with valid data.");
      return;
    }

    try { // posting menu item data to backend.
      const response = await axios.post(`${baseUrl}/AddMenuItem`, {
        name: name,
        description: description,
        category: category,
        price: price,
      });
      if (response.status === 200) {
        formRef.current.reset();
        window.location.reload();

        alert("Saved successfully!");
        console.log("Response data:", response.data);
      } else {
        alert("Not saved.");
      }
    } catch (error) {
      console.error("Error :", error);
      alert("An error occurred");
    }
  };

  return (
    <div className={style.AddItemToMenu}>
      <h2>Add Item to Menu</h2>

      {categories.length > 0 ? (
        <form className={style.Form} onSubmit={handleFormData} ref={formRef}>
          <div className={style.FormGroup}>
            <label htmlFor="name">Name:</label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              placeholder="Enter item name"
            />
          </div>

          <div className={style.FormGroup}>
            <label htmlFor="description">Description:</label>
            <input
              ref={descriptionRef}
              type="text"
              id="description"
              placeholder="Enter description"
            />
          </div>

          <div className={style.FormGroup}>
            <label htmlFor="category">Category:</label>
            <select ref={categoryRef} id="category">
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>

          <div className={style.FormGroup}>
            <label htmlFor="price">Price:</label>
            <input
              ref={priceRef}
              type="number"
              id="price"
              placeholder="Enter price"
            />
          </div>

          <button className={style.SubmitButton} type="submit">
            Add Item
          </button>
        </form>
      ) : (
        <p>Loading categories...</p>
      )}
    </div>
  );
};

export default AddItemToMenu;
