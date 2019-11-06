import React from 'react';
import List from '../components/list';
import data from './data';

const Articles = () => (
    <>
        <h1>Articles</h1>

        <List data={data} />
    </>
)

export default Articles;