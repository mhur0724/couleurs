import React from "react";
import classes from "./CategoryItem.module.css";

const CategoryItem = ({ image, title }) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={image} alt="" />
      <div className={classes.info}>
        <h1 className={classes.title}>{title}</h1>
        <button className={classes.button}>SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
