import { ADDSESSION, BUYPACK, CHANGEMODE, CLAIM, GETFRIENDS, GETITEMS, GETNOTIFICATIONS, GETSAVEDSIGNIN, LOADCOMPLETEDTASKS, LOGOUT, OPENPACK, RELOAD, SELLGIFT, SIGNUP, USEGIFT, VERIFYFINISHEDTASK } from "../actions/auth.actions"
import { SIGNUPOTHERS } from "../actions/auth.actions"
import { SIGNIN } from "../actions/auth.actions"

const initialState = {
    token: null,
    userId: null,
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
                money: action.money,
                Profile: action.Profile,
                packs: action.packs,
                metrics: action.metrics,
                tasks: action.tasks,
                gifts: action.gifts
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
                FriendsRequests: action.FriendsRequests,
                money: action.money,
                packs: action.packs,
                tasks: action.tasks,
                metrics: action.metrics,
                gifts: action.gifts,
                
            }
            case SIGNUPOTHERS:
                return {
                    ...state,
                    Name: action.Name,
                    Surname: action.Surname,
                    NickName: action.NickName,
                    Profile: action.Profile,
                    packs: action.packs,
                    metrics: action.metrics,
                    money: action.money,
                    tasks: action.tasks,
                    gifts: action.gifts,
                }     
                case RELOAD:
                    return {
                        ...state,
                        money: action.money,
                        packs: action.packs,
                        metrics: action.metrics,
                        tasks: action.tasks
                    }    
                case LOADCOMPLETEDTASKS:
                    return {
                        ...state,
                        tasks: action.tasks,
                        metrics: action.metrics
                    }    
                    case GETITEMS:
                        return {
                            ...state,
                            gifts: action.gifts
                        }    
                    case CLAIM:
                        return {
                            ...state,
                            tasks: action.tasks,
                            packs: action.packs,
                            money: action.money,
                            metrics: action.metrics
                        }    
                        case OPENPACK:
                            return {
                                ...state,
                                packs: action.packs,
                                gifts: action.gifts
                            } 
                    case ADDSESSION:
                        return {
                            ...state,
                            lastDate: action.lastDate
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
                case VERIFYFINISHEDTASK:
                    return {
                        ...state,
                        tasks: action.tasks
                    }    
                    case SELLGIFT:
                        return {
                            ...state,
                            gifts: action.gifts,
                            money: action.money,
                            metrics: action.metrics
                        }    
                        case USEGIFT:
                            return {
                                ...state,
                                gifts: action.gifts,
                            }    
                            case BUYPACK:
                                return {
                                    ...state,
                                    packs: action.packs,
                                    money: action.money
                                }    
                            
            default:
                return state
    }
}

export default authReducer