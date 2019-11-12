import React, { useState } from 'react';

const Form = ({ info, setInfo }) => {
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');

    const comment = async () => {
        const response = await fetch(`/api/articles/${info.name}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        setInfo(await response.json());
        setUsername('');
        setText('');
    }

    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>

            <label>
                Name:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>

            <label>
                Comment:
                <textarea rows="4" cols="50" value={text} onChange={(event) => setText(event.target.value)} />
            </label>

            <button onClick={() => comment()}>Add Comment</button>
        </div>
    );
}

export default Form;