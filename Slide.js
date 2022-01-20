import React from "react";
import classes from "./Slide.module.css";

const Slide = ({ img, title, description, button, backgroundColor }) => {
  return (
    <div className={classes.slide} style={{ backgroundColor: backgroundColor }}>
      <div className={classes["img-container"]}>
        <img src={img} alt="" />
      </div>

      <div className={classes["info-container"]}>
        <h1 className={classes.title}>{title.toUpperCase()}</h1>
        <p className={classes.description}>{description.toUpperCase()}</p>
        <button className={classes.button}>{button.toUpperCase()}</button>
      </div>
    </div>
  );
};

export default Slide;
