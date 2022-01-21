import React, { useState } from "react";
import classes from "./ProductItem.module.css";

const ProductItem = ({ image, product, price }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes["image-container"]}>
        <img src={image} alt="" />
      </div>
      <div className={classes["product-info"]}>
        <p>{product}</p>
        <p>{price}</p>
        <div className={classes.icons}>
          <div
            className={classes.favorite}
            onClick={() => setIsFavorite(!isFavorite)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
