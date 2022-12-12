import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { styled } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';

import Header from '../components/common/Header.jsx';
const Home = lazy(()=> import('./home/index'));
const List = lazy(()=> import('./list/index'));

function index() {
    return (
        <Layout>
            <Header />
            <Suspense fallback={
                <LoadingContainer>
                    <CircularProgress color="secondary" />
                </LoadingContainer>
            }>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/list' element={<List />} />
                </Routes>
            </Suspense>
        </Layout>
    );
}

const LoadingContainer = styled('div')(({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh'
}));

export default index;