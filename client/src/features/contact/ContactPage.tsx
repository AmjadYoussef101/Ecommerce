import { Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";

const ContactPage = () => {
    const dispatch = useAppDispatch();
    const {data, title} = useAppSelector(state => state.counter);
    return (
        <>
        <Typography variant="h2">
            {title}
        </Typography>
        <Typography variant="h5">
            The data is : {data}
        </Typography>
        <Button onClick={() => dispatch(decrement(1))} variant="contained" color="error">Decrement</Button>
        <Button onClick={() => dispatch(increment(1))} variant="contained" color="primary">Increment</Button>
        <Button onClick={() => dispatch(increment(5))} variant="contained" color="secondary">Increment By 5</Button>
        </>
    )
}

export default ContactPage;