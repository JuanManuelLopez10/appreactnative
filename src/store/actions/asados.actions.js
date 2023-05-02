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
export const addguest = (invitado, asado) => {
    return async dispatch => {
        try {
            let newGuests 
            if(asado.invitados){
                let exist = false
                
                asado.invitados.map(aaa => {if (aaa.email===invitado.email) {
                    exist=true                    
                }})

                if (exist===true) {
                    console.log('This user exists');
                }else{
                    newGuests = asado.guests,
                    newGuests.push(invitado)
                }

            }else{
                newGuests = [invitado]
                console.log('                  guest invited:  ', invitado);
            }

            dispatch({
                    type: ADDGUEST,
                    invitados: newGuests
            })
        }
        catch (error) {
            console.log('EError' + error.message);
        }

    }
}