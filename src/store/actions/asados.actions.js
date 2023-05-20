import { Alert } from "react-native"

export const CREATEASADO = 'CREATEASADO'
export const SETLOCATIONASADO = 'SETLOCATIONASADO'
export const ADDGUEST = 'ADDGUEST'


export const settypeanddate = (type, stringdate, readableDate) => {
    return async dispatch => {
        try {
            dispatch({
                    type: CREATEASADO,
                    asadoType: type,
                    stringdate,
                    readableDate
            })
        }
        catch (error) {
            console.log('EError' + error.message);
        }

    }
}
export const setlocationasado = (lat, lng, address) => {
    return async dispatch => {
        try {
            dispatch({
                    type: SETLOCATIONASADO,
                    location: {
                        latitude: lat,
                        longitude: lng
                    },
                    address 
            })
        }
        catch (error) {
            console.log('EError' + error.message);
        }

    }
}
export const addguest = (invitados) => {
    return async dispatch => {
        try {

            dispatch({
                    type: ADDGUEST,
                    invitados: invitados
            })
        }
        catch (error) {
            console.log('EError' + error.message);
        }

    }
}