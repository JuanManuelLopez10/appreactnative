import { CATEGORIES } from "../../../data/category";
import { SELECT_CATEGORY } from "../actions/category.action";

const initialState = {
    categories: CATEGORIES,
    selected: null
}
const categoryReducer = (state = initialState, action) => {
    switch (action.type){
        case SELECT_CATEGORY:
            const IndexCategory = state.categories.findIndex(cat => cat.id === action.categoryID)
            if (IndexCategory === -1) return state
            return {...state, selected: state.categories[IndexCategory]}
        default:
            return state
        }
}
export default categoryReducer;