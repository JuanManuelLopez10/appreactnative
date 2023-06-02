import { updateMode } from "../../db"

export const CHANGEMODE = 'CHANGEMODE'


export const changeMode = (currentMode) => {
    return async dispatch => {
        try {
            let newMode
            if (currentMode==='Light') {
            updateMode('Dark')
            newMode = 'Dark'
            }else{
            newMode = 'Light'
            updateMode('Light')
            }
                dispatch({
                type: CHANGEMODE,
                darkMode: newMode
            })
        }
        catch (error) {

            console.log('error' + error.message);
        }

    }
}