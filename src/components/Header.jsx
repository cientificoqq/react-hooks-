import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LightMode, DarkMode } from "@mui/icons-material";
const Header = ({ darkMode, setDarkMode }) => {
  const [timeInHours, setTimeInHours] = useState("");

  useEffect(() => {
    setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTimeInHours(currentTime);
    }, 1000);
  });

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
          <Link
            to="/stopwatch"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="text" color="inherit">
              stopwatch
            </Button>
          </Link>
          <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
            {darkMode ? <DarkMode /> : <LightMode />}
          </IconButton>
          <Typography variant="h6">{timeInHours}</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
