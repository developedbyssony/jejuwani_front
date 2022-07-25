import React from 'react';
import ProductShow2 from '../productShow2';
import Commentwrite from '../Commentwrite';

function productDetailPageRestaurant({serverURL, product_id}) {
    return(
    <div>
    <ProductShow2 serverURL={serverURL} product_id={product_id}/>
    <Commentwrite />
    </div>
    )
}

export default productDetailPageRestaurant;