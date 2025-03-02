import React, { useEffect, useState } from "react";
import { Button, Typography, Box, Container } from "@mui/material";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    let interval;
    if (isRunning) {
      const currentStartTime = startTime || performance.now();
      setStartTime(currentStartTime);
      interval = setInterval(() => {
        setTime(performance.now() - currentStartTime);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setStartTime(null);
  };

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const secs = Math.floor((milliseconds % 60000) / 1000);
    const millis = Math.floor(milliseconds % 1000);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}:${String(millis).padStart(3, "0")}`;
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          border: "1px solid red",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#3f51b5",
            marginBottom: 2,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {formatTime(time)}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "120px",
              padding: "10px 0",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#303f9f",
              },
            }}
            onClick={handleStartStop}
          >
            {isRunning ? "Stop" : "Start"}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              width: "120px",
              padding: "10px 0",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                borderColor: "#ff4081",
              },
            }}
            onClick={handleReset}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Stopwatch;
