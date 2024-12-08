import React from "react";
import style from "./Menu.module.css";
const MenuBanner = () => {
  return (
    <div className={style.Banner}>
    
      <h1>MENU</h1>
      <p>
        Please take a look at our menu featuring food, drinks, and brunch. If
        you'd like to place an order, use the "Order Online" button located
        below the menu.
      </p>
    </div>
  );
};

export default MenuBanner;
