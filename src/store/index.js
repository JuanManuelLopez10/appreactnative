import { createStore, combineReducers } from 'redux';

import categoryReducer from './reducers/category.reducer';
import ProductsReducer from './reducers/products.reducer';

const RootReducer = combineReducers({
    categories: categoryReducer,
    products: ProductsReducer
})

export default createStore(RootReducer)