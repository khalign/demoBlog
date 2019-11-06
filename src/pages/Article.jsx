import React from 'react';
import NotFound from './NotFound'
import List from '../components/list';
import data from './data';

const Articles = ({match}) => {
    const {name} = match.params;
    const article = data.find(article => article.name === name);
    const others = data.filter(article => article.name !== name);

    if (!article) return <NotFound />;

    return (
        <>
            <h1>{article.title}</h1>
            { article.content.map((paragraph, i) => <p key={i}>{paragraph}</p>) }

            <h3>Other Articles:</h3>
            <List data={others} />
        </>
    )
}

export default Articles;