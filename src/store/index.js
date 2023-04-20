import { createStore, combineReducers, applyMiddleware,  } from 'redux';
import thunk from 'redux-thunk';
import CartReducer from './reducers/cart.reducer';
import categoryReducer from './reducers/category.reducer';
import ProductsReducer from './reducers/products.reducer';
import OrderReducer from './reducers/order.reducer';
import authReducer from './reducers/auth.reducer';
import placeReducer from './reducers/place.reducer';
import usersReducer from './reducers/users.reduce';
import AsadoReducer from './reducers/asados.reducer';


const RootReducer = combineReducers({
    categories: categoryReducer,
    products: ProductsReducer,
    cart: CartReducer,
    orders: OrderReducer,
    auth: authReducer,
    places: placeReducer,
    users: usersReducer,
    asado: AsadoReducer 
})

export default createStore(RootReducer, applyMiddleware(thunk))