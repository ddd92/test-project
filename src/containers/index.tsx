import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../components/common/Header.jsx';
const Home = lazy(()=> import('./home/index'));
const List = lazy(()=> import('./list/index'));

function index() {
    return (
        <Layout>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/list' element={<List />} />
                </Routes>
            </Suspense>
        </Layout>
    )
}

export default index;