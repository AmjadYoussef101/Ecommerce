import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import { Avatar, Typography } from '@mui/material';
import { Product } from '../../app/models/product';
import {Link} from "react-router-dom";
import { useState } from 'react';
import agent from '../../app/api/agent';
import { LoadingButton } from '@mui/lab';
import { currencyFormat } from '../../util/util';
import { useAppDispatch } from '../../app/store/configureStore';
import { setBasket } from '../basket/basketSlice';

interface Props {
  product: Product;
}

const ProductCard = ({product} : Props) => {

    const [loading,setLoading] = useState(false);
    const dispatch = useAppDispatch();

    const handleAddItem = (productId: number) => {
      setLoading(true);
      agent.Basket.addItem(productId).
      then(basket => dispatch(setBasket(basket))).
      catch(error => console.log(error)).
      finally(() => setLoading(false));

    }
    return (
        <Card>
            <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor:"secondary.main"}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{sx:{fontWeight:"bold",color:"primary.main"}}}
             />
      <CardMedia
        sx={{ height: 140 , backgroundSize: "contain" , bgcolor:"primary.light"}}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="secondary">
          {currencyFormat(product.price)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton loading={loading} onClick={() => handleAddItem(product.id)} size="small">Add to cart</LoadingButton>
        <Button size="small" component={Link} to={`${product.id}`}>View</Button>
      </CardActions>
      </Card>)
}
export default ProductCard;