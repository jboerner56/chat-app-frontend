import React from 'react';

function Chatlist({messages}) {
    const messageItems = messages.map((m, i) => (
        <li key={i}>{m}</li>
    ));
    return(
        <ul>
            <li>
                {messageItems}
            </li>
        </ul>
    );
}
export default Chatlist;