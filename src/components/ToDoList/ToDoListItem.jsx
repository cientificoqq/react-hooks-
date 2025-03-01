import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const ToDoListItem = ({ title, description, onRemove, index }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: "10px",
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid green",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Box>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{description}</Typography>
      </Box>
      <Button variant="contained" color="error" onClick={() => onRemove(index)}>
        Remove
      </Button>
    </Container>
  );
};

export default ToDoListItem;
