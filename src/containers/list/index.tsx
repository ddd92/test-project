import React, { FunctionComponent } from "react";
import { styled, List } from "@mui/material";
import useToDoList from "hooks/list";
import { ListItemTypes } from "types/List";
import AddItem from 'components/list/AddItem';
import ListItem from 'components/list/ListItem';

const index: FunctionComponent = () => {
    const { list, value,  onChangeHandler, onPressEnter } = useToDoList();

    return ( 
        <Container>
            <Title>todos</Title>
            <AddItem value={value} onChangeHandler={onChangeHandler} onPressEnter={onPressEnter} />
            <ListContainer>
                {list.map((item: ListItemTypes, index) => <ListItem key={index} {...item} />)}
            </ListContainer>
        </Container>
    )
}

const Container = styled('div')(({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    maxWidth: '35rem',
    minWidth: '28rem',
    margin: 'auto',
}));

const Title = styled('h1')(({
    fontSize: '3rem',
}))

const ListContainer = styled(List)(({
    width: '100%',
}))

export default index;