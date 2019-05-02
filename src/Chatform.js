import React from 'react';

function ChatForm({text, handleChange, handleSend}) {
    return (
        <form
        onSubmit={handleSend}
        >
            <input
                value={text}
                onChange={handleChange}
            />
            <button
            onClick={handleSend}
            >Submit</button>
        </form>
    );
}

export default Chatform;