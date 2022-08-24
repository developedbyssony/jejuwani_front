import { useState } from 'react';

function Star({ selected = false }) {
    return (
        <>
        {selected ? (<i className="ic-star is-active"></i>) : (<i className="ic-star"></i>)}
        </>
    )
};

export default Star;