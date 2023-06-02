import { CHANGEMODE } from "../actions/auth.actions"


const initialState = {
    Mode: 'Light'
}

const ThemeReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGEMODE:
            return {
                ...state,
                Mode: action.darkMode
            }
                 default: 
            return state
        }
}
export default ThemeReducer
