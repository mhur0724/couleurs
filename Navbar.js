import React from "react";
import classes from "./Navbar.module.css";
import logo from "../images/logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <div className={classes["search__container"]}>
            <input className={classes.input} type="text" />
            <SearchOutlinedIcon style={{ color: "gray", fontSize: "1rem" }} />
          </div>
        </div>
        <div className={classes.center}>
          <img className={classes.logo} src={logo} alt="" />
        </div>
        <div className={classes.right}>
          <div className={classes["menu-item"]}>REGISTER</div>
          <div className={classes["menu-item"]}>SIGN IN</div>
          <div className={classes["menu-item"]}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
