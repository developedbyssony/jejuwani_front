import React from 'react';
import ProductShow from '../productShow';
import Commentwrite from '../Commentwrite';

export default function detail({serverURL, product_id}) {
    return(
        <div>
        <ProductShow serverURL={serverURL} product_id={product_id}/>
        <Commentwrite />
        </div>
    );
    }