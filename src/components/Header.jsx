import { AppBar, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
