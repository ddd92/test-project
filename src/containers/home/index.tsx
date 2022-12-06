import React, {FunctionComponent} from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Start } from '@mui/icons-material';

const index: FunctionComponent = () => {
    return (
        <Container>
            <h2>Todo List</h2>
            <Link to={'/list'}><StartIcon /></Link>
        </Container>
    )
}

const Container = styled('div')(({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
}));

const StartIcon = styled(Start)(({
    color: 'black',
    
    '&:hover': {
        color: 'cornflowerblue',
    }
}))

export default index;