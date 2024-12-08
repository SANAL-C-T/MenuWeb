import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.footer}>
        <div className={style.contact}>
          <h3 className={style.colours}>CONNECT WITH US</h3>
          <div className={style.dimensions}>
            <span>
              <img src="../../../public/phone.png"></img>
            </span>
            +91 9567843340
          </div>
          <div>
            <span>
              <img src="../../../public/email.png"></img>
            </span>
            info@deepnetsoft.com
          </div>
        </div>

        <div className={style.logo}>
          <img src="../../../public/Logo(1).png"></img>
          <h3 className={style.Brandname}>
            <span className={style.deep}>DEEP </span>
            <span className={style.net}>NET </span>
            <span className={style.soft}>SOFT </span>
          </h3>
          <div className={style.dimensions}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={style.find}>
          <h3 className={style.colours}>FIND US</h3>
          <div className={style.dimensions}>
            <div> location logo </div>
            <div>First floor, Geo infopark, Infopark EXPY, Kakkanad</div>{" "}
          </div>
        </div>
      </div>
      <div className={style.footerLastLne}>
        <div>© 2024 Deepnetsoft Solutions. All rights reserved.</div>
        <div className={style.footerLastLneSub}>
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
