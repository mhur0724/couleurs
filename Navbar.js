import React from "react";
import classes from "./Navbar.module.css";
import logo from "../images/logo.png";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { PersonOutline, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <div className={classes["menu-item"]}>STORE</div>
          <div className={classes["menu-item"]}>
            <Link to="/graphics">GRAPHICS</Link>
          </div>
          <div className={classes["menu-item"]}>
            <Link to="/lookbook">LOOKBOOK</Link>
          </div>
        </div>
        <div className={classes.center}>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="" />
          </Link>
        </div>
        <div className={classes.right}>
          <div className={classes["menu-item"]}>
            <Search />
          </div>
          <div className={classes["menu-item"]}>
            <PersonOutline />
          </div>
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
