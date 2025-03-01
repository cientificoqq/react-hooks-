import { Box, Button, Grid2, TextField, Typography } from "@mui/material";

import { useState } from "react";

const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "12px",
    border: "2px solid red",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  display: {
    marginBottom: "10px",
    "& input": {
      textAlign: "right",
      fontSize: "30px",
    },
  },
  button: {
    minWidth: "60px",
    minHeight: "60px",
    fontSize: "20px",
    fontWeight: "bold",
    borderRadius: "8px",
    backgroundColor: "#1976d2",
    color: "white",
    "&:hover": {
      backgroundColor: "#115293",
    },
  },
  gridContainer: {
    marginTop: "10px",
  },
};

const Calculator = () => {
  const [number, setNumber] = useState("");

  function handleClick(value) {
    if (value === "C") {
      setNumber("");
    } else if (value === "=") {
      try {
        setNumber(eval(number).toString());
      } catch {
        setNumber("Error");
      }
    } else {
      setNumber((prev) => prev + value);
    }
  }

  return (
    <Box sx={styles.container}>
      <Typography variant="h5" gutterBottom>
        Calculator
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        sx={styles.display}
        value={number}
      />
      <Grid2 container spacing={1} sx={styles.gridContainer}>
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          "C",
          "=",
          "+",
        ].map((item, index) => (
          <Grid2 item xs={3} key={index}>
            <Button
              variant="contained"
              sx={styles.button}
              onClick={() => handleClick(item)}
            >
              {item}
            </Button>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Calculator;
