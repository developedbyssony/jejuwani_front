import ProductUnit from '../components/cardUI/productUnitActivity';

const ProductList = ({ productItems }) => {
    return productItems.map((item) => {
        <ProductUnit item={{item}} />
    })
}

export default ProductList;