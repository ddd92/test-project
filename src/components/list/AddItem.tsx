import React, { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';

const index: FunctionComponent = () => {
    return (
        <Container>
            <AddInput label='what needs to be doen?' variant="filled"/>
        </Container>
    )
}

const Container = styled('div')(({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
}))

const AddInput = styled(TextField)(({
    width: '50%',
    maxWidth: '35rem',
}))

export default index;