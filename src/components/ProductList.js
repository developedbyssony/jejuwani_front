import React from 'react';
import ProductUnit from './cardUI/productUnitActivity';

const ProductList = ({ ProductUnit }) => {
    return ProductUnit.map({imgSrc,title,price}) (
        <article id="product-card">
            <div className="rounded-lg overflow-hidden border-2 relative">
            <img
                src={imgSrc}
                className="object-center object-cover"
                alt={title}
            />
            <div className="hover:bg-sky-500 w-full h-full absolute top-0 left-0 opacity-90 transition-colors ease-linear duration-75">
                <div className="hover:opacity-100 opacity-0 w-full h-full flex justify-center items-center text-xl text-white font-bold cursor-pointer">
                    장바구니에 담기
                </div>
            </div>
        </div>
        <h3 className="mt-4 text-gray-700">{title}</h3>
        <p className="mt-1 text-lg font-semibold text-gray-900">
            {price.toLocaleString()}
        </p>
    </article>
    );
}

export default ProductList;