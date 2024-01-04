import { Alert } from "react-native";
import { URL_AUTH_SIGN, URL_API, URL_AUTH_SIGNIN } from "../../constants/database";
import { deleteUser, fetchUser, insertUser, updateMode } from "../../db";

export const GETPACKS = 'GETPACKS'


export const getPacks = () => {
    return async dispatch => {
        try {
                
                const response = await fetch(`${URL_API}/packs.json`, {
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
                        type: GETPACKS,
                        packs: arraydeusuarios,
                    }) 
            }
        catch (error) {

            console.log('EError aca getPack' + error.message);
        }

    }
}