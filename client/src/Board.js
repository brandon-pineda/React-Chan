import React from 'react';

const Board = (props) => (
    <div>
        <h1>{`${(props.title)}`}</h1>
        <p>{`${props.description}`}</p>
    </div>
)

export default Board;
