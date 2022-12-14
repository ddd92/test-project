import React from 'react';
import { styled } from '@mui/material/styles';
import { Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <Container>
            <Link to={'/'}>
                <HomeIcon color='action' />
            </Link>
        </Container>
    )
}

const Container = styled('div')(({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px 15px',
}))

const HomeIcon = styled(Home)(({
    '&:hover':{
        color: 'green',
    }
}))

export default index;