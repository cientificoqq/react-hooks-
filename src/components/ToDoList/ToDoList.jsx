import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);

  function eventTitle(event) {
    setTitle(event.target.value);
  }

  function eventDescription(event) {
    setDescription(event.target.value);
  }

  function AddToList() {
    if (title.trim() && description.trim()) {
      setItems([...items, { title, description }]);
      setTitle("");
      setDescription("");
    }
  }

  function onRemove(index) {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }

  return (
    <Container maxWidth="lg" sx={{ mt: "20px" }}>
      <Typography variant="h4">To Do List</Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={eventTitle}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        sx={{ mt: "15px" }}
        value={description}
        onChange={eventDescription}
      />
      <Button onClick={AddToList} sx={{ mt: "15px" }}>
        Add
      </Button>
      {items.length ? (
        <div></div>
      ) : (
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Empty
        </Typography>
      )}
      {items.map((item, index) => (
        <ToDoListItem
          key={index}
          title={item.title}
          description={item.description}
          onRemove={() => onRemove(index)}
        />
      ))}
    </Container>
  );
};

export default ToDoList;
