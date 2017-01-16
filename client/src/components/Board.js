import React from 'react';
import {Link} from 'react-router';

const Board = (props) => (
    <div>
        <Link to={`/board/${props.boardName}`}>
            <h1>{`${(props.title)}`}</h1>
        </Link>
        <div dangerouslySetInnerHTML={{__html: `${props.description}`}}/>
    </div>
)

export default Board;
