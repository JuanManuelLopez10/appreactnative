import { CHANGEPAGE, CHANGESUBTASKOPTION, CHANGETASKCLAIM, CHANGETASKOPTION, OPENPACK, SELECTGIFT } from "../actions/app.actions"

const initialState = {
    page: null,
    openPack: undefined
}

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGEPAGE:
            return {
                ...state,
                page: action.page
            }
        case CHANGETASKOPTION:
                return {
                    ...state,
                    Option: action.Option
                }
                case CHANGESUBTASKOPTION:
                    return {
                        ...state,
                        Subtaskselected: action.SelectedSubtask
                    }
                    case CHANGETASKCLAIM:
                        return {
                            ...state,
                            TaskClaim: action.TaskClaim
                        }
                        case OPENPACK:
                            return {
                                ...state,
                                NewItems: action.NewItems
                            }
                            case SELECTGIFT:
                                return {
                                    ...state,
                                    giftSelected: action.giftSelected
                                }
                            
            default:
                return state
    }
}

export default appReducer
