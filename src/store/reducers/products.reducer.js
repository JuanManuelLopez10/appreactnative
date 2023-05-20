import { SELECTCATEGORY } from "../actions/products.actions"

const initialState = {
    category: null
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type){
        case SELECTCATEGORY:
            return {
                ...state,
                category: action.category,
            } 
 
            
            default:
                return state
    }
}

export default ProductsReducer