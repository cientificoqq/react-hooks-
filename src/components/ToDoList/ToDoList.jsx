import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: "20px" }}>
      <Typography variant="h4">To Do List</Typography>

      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        sx={{ mb: "15px" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

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

      {filteredItems.length === 0 ? (
        <Typography variant="h5" sx={{ textAlign: "center", mt: "20px" }}>
          No items match your search.
        </Typography>
      ) : (
        filteredItems.map((item, index) => (
          <ToDoListItem
            key={index}
            title={item.title}
            description={item.description}
            onRemove={() => onRemove(index)}
          />
        ))
      )}
    </Container>
  );
};

export default ToDoList;
