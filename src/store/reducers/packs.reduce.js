import { GETPACKS} from "../actions/packs.actions"

const initialState = {
    packs: []
}

const packsReducer = (state = initialState, action) => {
    switch (action.type){
        case GETPACKS:
            return {
                ...state,
                packs: action.packs,
            }
            default:
                return state
    }
}

export default packsReducer