import { URL_AUTH_SIGN, URL_API, URL_AUTH_SIGNIN } from "../../constants/database";

export const GETGIFTS = 'GETGIFTS'
export const UPLOADGIFT = 'UPLOADGIFT'

export const getGifts = () => {
    return async dispatch => {
        try {
                
                const response = await fetch(`${URL_API}/gifts.json`, {
                    method: 'GET',
                    header: {
                        'Content-Type': 'application/json'
                    }
                })
                const respuesta = await response.json()
                const arraydeusuarios = Object.keys(respuesta).map(function(clave) {
                    return respuesta[clave];
                  });
                    
                dispatch({
                        type: GETGIFTS,
                        gifts: arraydeusuarios,
                    }) 
            }
        catch (error) {

            console.log('EError aca getPack' + error.message);
        }

    }
}
export const uploadGift = (objeto) => {
    return async dispatch => {
        try {
                const responseExtra = await fetch(`${URL_API}/gifts.json`, {
                    method: 'GET',
                    header: {
                        'Content-Type': 'application/json'
                    }
                })
                const respuesta = await responseExtra.json()
                const arraydeusuarios = Object.keys(respuesta).map(function(clave) {
                    return respuesta[clave];
                  });
                  arraydeusuarios.push(objeto)

                  const response = await fetch(`${URL_API}/gifts/.json`, {
                    method: 'PUT',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arraydeusuarios)
                })
                console.log('openPack');
                dispatch({
                type: UPLOADGIFT,
                gifts: arraydeusuarios
            })
        }
        catch (error) {

            console.log('error addSession' + error.message);
        }

    }
}
