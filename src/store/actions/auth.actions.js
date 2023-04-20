import { URL_AUTH_SIGN, URL_API, URL_AUTH_SIGNIN } from "../../constants/database";

export const SIGNUP = 'SIGNUP'
export const SIGNUPOTHERS = 'SIGNUPOTHERS'
export const SIGNIN = 'SIGNIN'

export const signupothers = (email, NickName) => {
    return async dispatch => {
        try {
                const responseExtra = await fetch(`${URL_API}/users.json`, {
                    method: 'GET',
                    header: {
                        'Content-Type': 'application/json'
                    }
                })
                const respuesta = await responseExtra.json()
            
                const arraydeusuarios = Object.keys(respuesta).map(function(clave) {
                    return respuesta[clave];
                  });
                arraydeusuarios.map(item => {if (item.email===email) {
                    item.NickName=NickName
                }})
                const response = await fetch(`${URL_API}/users/.json`, {
                    method: 'PUT',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arraydeusuarios)
                })

                dispatch({
                type: SIGNUPOTHERS,
            })
        }
        catch (error) {

            console.log('error' + error.message);
        }

    }
}
export const signup = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SIGN, {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                }),

            })

            const data = await response.json()
            if (response.ok) {
                const responseExtra = await fetch(`${URL_API}/users.json`, {
                    method: 'POST',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        id: data.localId,
                        
                    }),

                })
            } else {
                const errorResponse = await response.json()
                const errorId = errorResponse.error.message
                console.log(errorId);
                
            }

            dispatch({
                type: SIGNUP,
                token: data.idToken,
                userId: data.localId,
            })
        }
        catch (error) {

            console.log('error' + error.message);
        }

    }
}
export const signin = (email, password) => {
    return async dispatch => {
        try {
            const responseExtra = await fetch(URL_AUTH_SIGNIN, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        password,
                        returnSecureToken: true
                    })
                })
            const data = await responseExtra.json()

            dispatch({
                    type: SIGNIN,
                    token: data.idToken,
                    userId: data.localId,
                    email: email
            })
        }
        catch (error) {

            console.log('EError' + error.message);
        }

    }
}