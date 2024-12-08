import React, {useState} from "react";
import style from "./Nav.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={style.navbarContainer}>
      <div className={style.left}>
        <ul  className={style.leftUl}>
          <li>
            <img src="../../../public/Logo(1).png" alt="DeepSoft Logo" />
          </li>
          <li>
            <h2 className={style.Brandname}>
              <span className={style.deep}>DEEP</span> <span className={style.net}>NET</span> <div className={style.soft}>SOFT</div>
            </h2>
          </li>
        </ul>
      </div>

      <div className={style.hamburger} onClick={toggleMenu}>
      <img src="../../../public/ci_hamburger-md.png" alt="menu" />
      </div>

      <div
        className={`${style.right} ${isMenuOpen ? style.menuOpen : ""}`}
      >
        <ul className={style.rightUl}>
          <li>HOME</li>
          <li>MENU</li>
          <li>MAKE A RESERVATION</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
