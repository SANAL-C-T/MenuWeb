import React, { useEffect, useState } from "react";
import style from "./MenuDesc.module.css";

const MenuDesc = ({ menuData }) => {
  return (
    <div className={style.menuDescription}>
      <div className={style.backgroundsideImageLeft}></div>

      <div className={style.centerPortion}>
        <div className={style.innerContainer}>
          <div className={style.imageTopRight}></div>

          <div className={style.headings}>
            <div className={style.line}></div>
            <h1>
              {" "}
              <span className={style.title}>BRUNCH COCKTAILS</span>{" "}
            </h1>
            <div className={style.line}></div>
          </div>

          <div className={style.menuContent}>
            {menuData.map((x, index) => (
              <div key={index} className={style.menuItem}>
                <div className={style.itemHeader}>
                  <h3>{x.Item_Name}</h3>
                  <span className={style.priceContainer}>
                    <h3>............ ${x.Price}</h3>
                  </span>
                </div>
                <p>{x.Description}</p>
              </div>
            ))}
          </div>

          <div className={style.imageBottomLeft}></div>
        </div>
      </div>

      <div className={style.backgroundsideImageRight}></div>
    </div>
  );
};

export default MenuDesc;
