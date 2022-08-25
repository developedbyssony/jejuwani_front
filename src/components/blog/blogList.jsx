import React from 'react';
import BlogPost from '../cardUI/blogPost';

function blogList({data, sort}) {
    return (
        <ul>
            {data.map((my) => <li><BlogPost myPost={my}/></li>)}
        </ul>
    )
}

export default blogList;