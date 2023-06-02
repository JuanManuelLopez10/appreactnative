import { createStore, combineReducers, applyMiddleware,  } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth.reducer';
import placeReducer from './reducers/place.reducer';
import usersReducer from './reducers/users.reduce';
import AsadoReducer from './reducers/asados.reducer';
import ProductsReducer from './reducers/products.reducer';
import ThemeReducer from './reducers/theme.reducer';


const RootReducer = combineReducers({
    auth: authReducer,
    places: placeReducer,
    users: usersReducer,
    asado: AsadoReducer,
    products: ProductsReducer,
    theme: ThemeReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))