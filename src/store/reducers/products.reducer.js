import { PRODUCTS } from "../../../data/products";
import {SELECT_PRODUCT, FILTERED_PRODUCT} from "../actions/products.action";

const initialState = {
    products: PRODUCTS,
    filteredproducts: [],
    selected: null
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type){
        case SELECT_PRODUCT:
            return {
                ...state,
                selected: state.products.find(product => product.id === action.productID)}
        case FILTERED_PRODUCT:
            return {
                ...state,
                filteredproducts: state.products.filter(product => product.category === action.categoryID)
            }
        default:
            return state
    }
}

export default ProductsReducer;