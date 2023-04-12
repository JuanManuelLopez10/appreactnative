import { URL_AUTH_SIGN } from "../../constants/database";

export const SIGNUP = 'SIGNUP'

export const signup = ( email, password ) => {
    console.log('lapassword ' + password);
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
            console.log(data);

            dispatch({
                type: SIGNUP,
                token: data.idToken,
                userId: data.localId
            })
        }
        catch (error) {
            console.log('error' + error);
        }

    }
}