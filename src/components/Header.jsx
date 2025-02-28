import { AppBar, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Button variant="text" color="inherit">
            Counter
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
