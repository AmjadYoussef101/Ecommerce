import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync, removeBasketItemAsync } from "./basketSlice";

const BasketPage = () => {

  const { basket, status } = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();



  if (!basket) return <Typography variant="h3">Your basket is empty</Typography>

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Subtotal</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.items.map((item) => (
              <TableRow
                key={item.productId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box display="flex" alignItems="center">
                    <img src={item.pictureUrl} alt={item.name} style={{ height: 50, marginRight: 20 }} />
                    {item.name}
                  </Box>
                </TableCell>
                <TableCell align="right">${(item.price / 100).toFixed(2)}</TableCell>
                <TableCell align="center">
                  <LoadingButton 
                  loading={status === "pendingRemoveItem" + item.productId + "remove"} 
                  onClick={() => dispatch(removeBasketItemAsync({productId: item.productId, quantity: 1, name: "remove"}))} 
                  color="error">
                    <Remove />
                  </LoadingButton>
                  {item.quantity}
                  <LoadingButton 
                  loading={status.includes("pendingAddItem" + item.productId)} 
                  onClick={() => dispatch(addBasketItemAsync({productId: item.productId}))} 
                  color="secondary">
                    <Add />
                  </LoadingButton>
                </TableCell>
                <TableCell align="right">${((item.price / 100) * item.quantity).toFixed(2)}</TableCell>
                <TableCell align="right">
                  <LoadingButton 
                  loading={status === "pendingRemoveItem" + item.productId + "delete"} 
                  onClick={() => dispatch(removeBasketItemAsync({productId: item.productId, quantity: item.quantity, name: "delete"}))} 
                  color="error">
                    <Delete />
                  </LoadingButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container>
        <Grid xs={6} />
        <Grid xs={6}>
          <BasketSummary />
          <Button
            component={Link}
            to={"/checkout"}
            variant="contained"
            size="large"
            fullWidth
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </>
  )

}
export default BasketPage;