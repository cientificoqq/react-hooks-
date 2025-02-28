import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Counter = () => {
  const [item, setItem] = useState(0);
  function ink() {
    setItem((prev) => prev + 1);
  }
  function dek() {
    if (item > 0) {
      setItem((prev) => prev - 1);
    } else {
      setItem((prev) => prev);
    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          maxWidth: 340,
        }}
      >
        <CardMedia component="img" height="300" image="/1585225128_63618.jpg" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Banana
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Banana is a sweet and nutritious tropical fruit, rich in vitamins
            and potassium. Perfect for a snack or adding to dishes and
            beverages.
          </Typography>
          <Typography
            variant="h6"
            color="text.primary"
            sx={{ marginTop: "10px" }}
          ></Typography>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            color="primary"
            startIcon={<RemoveCircleOutlineIcon />}
            onClick={dek}
          >
            Remove
          </Button>
          <Button
            size="large"
            color="secondary"
            startIcon={<AddCircleOutlineIcon />}
            onClick={ink}
          >
            Add
          </Button>
          <Typography variant="h6" color="text.secondary">
            {item}
          </Typography>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Counter;
