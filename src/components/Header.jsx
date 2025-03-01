import { AppBar, Button, Container, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { LightMode, DarkMode } from "@mui/icons-material";
const Header = ({ darkMode, setDarkMode }) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button variant="text" color="inherit">
              Counter
            </Button>
          </Link>
          <Link to="/todo" style={{ textDecoration: "none", color: "inherit" }}>
            <Button variant="text" color="inherit">
              To Do List
            </Button>
          </Link>
          <Link
            to="/calculator"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="text" color="inherit">
              Сalculator
            </Button>
          </Link>
          <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
            {darkMode ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
