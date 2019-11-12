import React from 'react';

const Upvotes = ({info, setInfo}) => {
    const upvote = async () => {
        const response = await fetch(`/api/articles/${info.name}/upvote`, {method: "POST"});
        setInfo(await response.json());
    };

    return (
        <div className="upvotes-section">
            <button onClick={() => upvote()}>Upvote</button>
            <p>This article has been upvoted {info.upvotes} times</p>
        </div>
    )
};

export default Upvotes;