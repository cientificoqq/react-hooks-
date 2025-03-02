import React, { useEffect, useState } from "react";
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  Container,
  Typography,
  Paper,
} from "@mui/material";

const Filter = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h4" gutterBottom>
          Products
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
      </Paper>
      <List>
        {filteredProducts.map((product) => (
          <ListItem key={product.id} divider>
            <ListItemText primary={product.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Filter;
