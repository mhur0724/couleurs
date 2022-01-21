import React from "react";
import { products } from "./data";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = () => {
  return (
    <>
      <div className={classes["best-sellers"]}>
        <h2>Best Sellers</h2>
        <p>You Spoke. We Listened.</p>
      </div>
      <div className={classes.container}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            image={product.img}
            product={product.product}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
