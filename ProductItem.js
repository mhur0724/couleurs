import React from "react";
import classes from "./ProductItem.module.css";
const ProductItem = ({ image, product, price }) => {
  return (
    <div className={classes.container}>
      <div className={classes["image-container"]}>
        <img src={image} alt="" />
      </div>
      <div className={classes["product-info"]}>
        <p>{product}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
