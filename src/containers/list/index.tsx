import React, { FunctionComponent } from "react";
import { styled } from "@mui/material";
import AddItem from 'components/list/AddItem';

const index: FunctionComponent = () => {
    return ( 
        <Container>
            <Title>todos</Title>
            <AddItem />
        </Container>
    )
}

const Container = styled('div')(({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
}));

const Title = styled('h1')(({
    fontSize: '3rem',
}))

export default index;