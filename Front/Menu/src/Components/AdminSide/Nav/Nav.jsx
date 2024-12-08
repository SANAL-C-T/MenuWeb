import React from "react";
import style from "./Nav.module.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = (path) => {
    localStorage.removeItem("jwtToken");
    navigate(path);
  };

  return (
    <div className={style.navbars}>
      <button
        onClick={() => handleNavigation("/AddCategory")}
        className={style.addCat}
      >
        Add category
      </button>
      <button
        onClick={() => handleNavigation("/AddItem")}
        className={style.addMenu}
      >
        Add menu item
      </button>
      <button
        onClick={() => handleNavigation("/ListCategory")}
        className={style.listCat}
      >
        List category
      </button>
      <button
        onClick={() => handleNavigation("/ListMenu")}
        className={style.listmenu}
      >
        List menu item
      </button>
      <button onClick={() => handleLogout("/Admin")} className={style.logout}>
        Logout
      </button>
    </div>
  );
};

export default Nav;
