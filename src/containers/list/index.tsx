import React, { FunctionComponent } from "react";
import { styled, List, Button } from "@mui/material";
import useToDoList from "hooks/list";
import { ListItemTypes } from "types/List";
import AddItem from 'components/list/AddItem';
import ListItem from 'components/list/ListItem';

const index: FunctionComponent = () => {
    const { 
        list,
        value,
        onChangeHandler,
        onPressEnter,
        deleteListItem,
        onChangeCheckBox,
        setFilterData,
        initListData,
    } = useToDoList();

    return ( 
        <Container>
            <Title>todos</Title>
            <AddItem value={value} onChangeHandler={onChangeHandler} onPressEnter={onPressEnter} />
            <ListContainer>
                {list.map((item: ListItemTypes, index) => 
                    (<ListItem 
                        key={index}
                        {...item}
                        itemId={index}
                        deleteListItem={deleteListItem}
                        onChangeCheckBox={onChangeCheckBox}
                    />)
                )}
            </ListContainer>
            <div>
                <Button type='button' onClick={initListData}>All</Button>
                <Button type='button' onClick={(e) => setFilterData(e, false)}>Active</Button>
                <Button type='button' onClick={(e) => setFilterData(e, true)}>Completed</Button>
            </div>
        </Container>
    );
};

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
}));

const ListContainer = styled(List)(({
    width: '100%',
}));

export default index;