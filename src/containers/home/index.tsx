import React, {FunctionComponent} from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Start } from '@mui/icons-material';

const index: FunctionComponent = () => {
    return (
        <Container>
            <Title>Todo List</Title>
            <Link to={'/list'}><StartIcon /></Link>
        </Container>
    );
};

const Container = styled('div')(({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
}));

const Title = styled('h1')(({
    fontSize: '3rem',
}));

const StartIcon = styled(Start)(({
    fontSize: '2rem',
    color: 'black',
    
    '&:hover': {
        color: 'cornflowerblue',
    }
}));

export default index;