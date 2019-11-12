import React, {useState, useEffect} from 'react';
import NotFound from './NotFound';
import Upvotes from '../components/upvotes';
import Comments from '../components/comments';
import Form from '../components/form';
import List from '../components/list';
import data from './data';

const Articles = ({match}) => {
    const {name} = match.params;
    const article = data.find(article => article.name === name);
    const others = data.filter(article => article.name !== name);

    const [info, setInfo] = useState({upvotes: 0, comments: []});
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/articles/${name}`);
            setInfo(await response.json());
        };
        fetchData();
    }, [name])

    if (!article) return <NotFound />;

    return (
        <>
            <h1>{article.title}</h1>
            <Upvotes info={info} setInfo={setInfo} />
            { article.content.map((paragraph, i) => <p key={i}>{paragraph}</p>) }

            <Comments comments={info.comments} />
            <Form info={info} setInfo={setInfo} />

            <h3>Other Articles:</h3>
            <List data={others} />
        </>
    )
}

export default Articles;