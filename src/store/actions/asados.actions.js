export const CREATEASADO = 'CREATEASADO'
export const SETLOCATIONASADO = 'SETLOCATIONASADO'


export const selectType = (type) => {
    return async dispatch => {
        try {
            dispatch({
                    type: CREATEASADO,
                    asadoType: type,
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