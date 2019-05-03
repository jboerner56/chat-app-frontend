import React from 'react';

function Chatlist({messages}) {
    const messageItems = messages.map((m, i) => (
        <li key={i}>{m}</li>
    ));
    return(
        <ul>
                {messageItems}

        </ul>
    );
}
export default Chatlist;