import { LOGOUT, SIGNUPOTHERS, VERIFYUSERNICKNAME } from "../actions/auth.actions"
import { GETUSERS, SEARCHUSERS, SELECTUSERSEARCHED } from "../actions/users.actions"

const initialState = {
    users: [],
    results: [],
    searcheduser: ''
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
        case SELECTUSERSEARCHED:
            return {
                ...state,
                searcheduser: action.userSearched,
            }    
        case VERIFYUSERNICKNAME:
            return {
                ...state,
                exist: action.exist,
            }    
 
            
            default:
                return state
    }
}

export default usersReducer