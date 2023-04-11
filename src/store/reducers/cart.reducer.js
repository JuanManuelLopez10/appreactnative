import { PRODUCTS } from "../../../data/products";
import { ADD_ITEM, CONFIRM_CART, REMOVE_ITEM } from "../actions/cart.action";

const InitialState = {
    items: [],
    order: {},
    total: 0 
}
const sumaTotal = (list) => list
    .map(item => item.cantidad * item.precio)
    .reduce((a, b) => a + b, 0)

const CartReducer = (state = InitialState, action) => {
    switch(action.type){
        case ADD_ITEM:
            let updatedCart = []
            if (state.items.find(item => item.id === action.item.id)){
                updatedCart = state.items.map(item => {
                    if(item.id === action.item.id) item.cantidad++;
                    return item
                })
            }else{
                const item = {...action.item, cantidad: 1};
                updatedCart = [...state.items, item]
            }
            return {
                ...state,
                items: updatedCart,
                total: sumaTotal(updatedCart)
            }
        case REMOVE_ITEM:
                const filteredCart = state.items.filter(item => item.id !== action.itemID)
                return {
                    ...state,
                    items: filteredCart,
                    total: sumaTotal(filteredCart)
                }
                default:
            return state;

        }


    }

export default CartReducer;