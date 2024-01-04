import { GETGIFTS, UPLOADGIFT } from "../actions/gifts.actions"


const initialState = {
    gifts: []
}

const giftsReducer = (state = initialState, action) => {
    switch (action.type){
        case GETGIFTS:
            return {
                ...state,
                gifts: action.gifts,
            }
            case UPLOADGIFT:
                return {
                    ...state,
                    gifts: action.gifts,
                }
    
            default:
                return state
    }
}

export default giftsReducer