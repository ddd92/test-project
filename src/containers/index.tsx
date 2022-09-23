import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../components/common/Header.jsx';
const Home = lazy(()=> import('./home/index'))

function index() {
    return (
        <Layout>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Layout>
    )
}

export default index;