import { GETFRIENDS, GETNOTIFICATIONS, GETSAVEDSIGNIN, LOGOUT, SIGNUP } from "../actions/auth.actions"
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
                userId: action.userId,
                email: action.email
            }
        case SIGNIN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                email: action.email,
                Name: action.Name,
                Surname: action.Surname,
                NickName: action.NickName,
                friends: action.friends,
                Profile: action.Profile
            }   
        case GETSAVEDSIGNIN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                email: action.email,
                Name: action.Name,
                Surname: action.Surname,
                NickName: action.NickName,
                friends: action.friends,
                Profile: action.Profile,
                FriendsRequests: action.FriendsRequests
            }
            case SIGNUPOTHERS:
                return {
                    ...state,
                    Name: action.Name,
                    Surname: action.Surname,
                    NickName: action.NickName,
                    Profile: action.Profile,
                }         
            case GETNOTIFICATIONS:
                return {
                    ...state,
                    notifications: action.notifications
                }        
            case LOGOUT:
                return {
                    state: initialState
                }
            case GETFRIENDS:
                return {
                    ...state,
                    Friends: action.friends
                }                  
                        
            default:
                return state
    }
}

export default authReducer