import { SIGNUP } from "../actions/auth.actions"
import { SIGNUPOTHERS } from "../actions/auth.actions"
import { SIGNIN } from "../actions/auth.actions"

const initialState = {
    token: null,
    userId: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SIGNUP:
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }
        case SIGNIN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                email: action.email
            }
        case SIGNUPOTHERS:
            return {
                ...state,
            }        
            default:
                return state
    }
}

export default authReducer