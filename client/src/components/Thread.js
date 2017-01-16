import React from 'react';

let getTitle = (title) => {
    if(title) {
        return (
            <h2>`${title}`</h2>
        )
    }
}

const Thread = (props) => (
    <div>
        {getTitle(props.title)}
        <div dangerouslySetInnerHTML={{__html: `${props.description}`}}/>
    </div>
)

export default Thread;
