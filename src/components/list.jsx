import React from 'react';
import {Link} from 'react-router-dom';

const List = ({data}) => (
    <>
        {
            data.map(article => 
                <Link key={article.name} to={`/article/${article.name}`} className='article-list-item' >
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>
                </Link>
            )
        }
    </>
)

export default List;