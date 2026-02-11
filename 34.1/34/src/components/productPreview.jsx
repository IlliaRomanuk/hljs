import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTableData } from "../redux/slice";
import {
  selectTableItems,
  selectTableLoading,
  selectTableError,
} from "../redux/selector";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ProdPreview() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTableData("https://698b71d86c6f9ebe57bcb9af.mockapi.io/gfd"));
  }, [dispatch]);

  const items = useSelector(selectTableItems);
  const isLoading = useSelector(selectTableLoading);
  const error = useSelector(selectTableError);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <img
        src="../public/logoTable.svg"
        alt="logo"
        style={{ marginBottom: 20 }}
      />
      <Grid container spacing={2}>
        {items.map((row) => (
          <Grid item xs={12} sm={3} md={2} key={row.id}>
            <ThemeProvider theme={theme}>
              <Item elevation={4} sx={{ maxWidth: "400px" }}>
                <img
                  src="../public/mac.png"
                  alt="macbook"
                  style={{ maxWidth: "200px" }}
                />
                <Typography> Description: {row.Description}</Typography>
                <Typography>Category: {row.Category}</Typography>
                <Typography>Quantity: {row.Quantity}</Typography>
                <Typography>Price: ${row.Price}</Typography>

                <IconButton>
                  <AddShoppingCartIcon />
                  Готовий до відправки
                </IconButton>
              </Item>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProdPreview;
