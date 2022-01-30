import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const pages = [
  {
    id: 1,
    name: "Home",
    navLink: "/",
  },
  {
    id: 2,
    name: "Games",
    navLink: "/games",
  },
  {
    id: 3,
    name: "Teams",
    navLink: "/teams",
  },
];

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {pages.map((page) => (
            <NavLink key={page.id} to={page.navLink} className="navItem">
              <MenuItem>
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            </NavLink>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
