import React, { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import { styled  } from '@mui/material/styles';
import { AddItemTypes } from 'types/List';

const index: FunctionComponent<AddItemTypes> = (props) => {
    const { value, onChangeHandler, onPressEnter } = props;

    return (
        <Container>
            <AddInput 
                label='what needs to be done?'
                variant="filled"
                value={value}
                onChange={onChangeHandler}
                onKeyDown={onPressEnter}
            />
        </Container>
    );
};

const Container = styled('div')(({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
}));

const AddInput = styled(TextField)(({
    width: '100%',
}));

export default index;