import { GETUSERS, SEARCHUSERS } from "../actions/users.actions"

const initialState = {
    users: [],
    results: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case GETUSERS:
            return {
                ...state,
                users: action.users,
            }
        case SEARCHUSERS:
            return {
                ...state,
                results: action.results,
            }    
            default:
                return state
    }
}

export default usersReducer