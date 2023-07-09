import { Alert } from "react-native";
import { URL_AUTH_SIGN, URL_API, URL_AUTH_SIGNIN } from "../../constants/database";
import { deleteUser, fetchUser, insertUser, updateMode } from "../../db";

export const SIGNUP = 'SIGNUP'
export const SIGNUPOTHERS = 'SIGNUPOTHERS'
export const SIGNIN = 'SIGNIN'
export const GETSAVEDSIGNIN = 'GETSAVEDSIGNIN'
export const VERIFYUSERNICKNAME = 'VERIFYUSERNICKNAME'
export const GETNOTIFICATIONS = 'GETNOTIFICATIONS'
export const LOGOUT = 'LOGOUT'
export const GETFRIENDS = 'GETFRIENDS'
export const CHANGEMODE = 'CHANGEMODE'

export const signupothers = (email, Name, Surname, NickName, Profile) => {
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
                    item.Name=Name
                    item.Surname=Surname
                    item.NickName=NickName
                    item.Profile=Profile
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
                Name,
                Surname,
                NickName,
                Profile
            })
        }
        catch (error) {

            console.log('error' + error.message);
        }

    }
}
export const verifyUserNickname = (nickname) => {
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
                let userexist = false
                arraydeusuarios.map(item => {if (item.Nickname===nickname) {
                    userexist = true
                }})

                dispatch({
                type: VERIFYUSERNICKNAME,
                exist: userexist
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
                
            }
            const result = await insertUser(email, password)

            dispatch({
                type: SIGNUP,
                email,
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
            const response = await fetch(`${URL_API}/users.json`, {
                method: 'GET',
                header: {
                    'Content-Type': 'application/json'
                }
            })
            const respuesta = await response.json()
            let objeto = {}
            const arraydeusuarios = Object.keys(respuesta).map(function(clave) {
                return respuesta[clave];
              });
            arraydeusuarios.map(item => {if (item.email===data.email) {
                objeto.Name = item.Name
                objeto.Surname = item.Surname
                objeto.NickName = item.NickName
                objeto.Profile = item.Profile
            }})



            const result = await insertUser(email, password)

            dispatch({
                    type: SIGNIN,
                    token: data.idToken,
                    userId: data.localId,
                    email: email,
                    password,
                    friends: objeto.friends,
                    Name: objeto.Name,
                    Surname: objeto.Surname,
                    NickName: objeto.NickName,
                    Profile: objeto.Profile
            })
        }
        catch (error) {

            console.log('Eor' + error.message);
        }

    }
}
export const logout = () => {
    return async dispatch => {
        try {
            const dele = await deleteUser()

            dispatch({
                    type: LOGOUT,
            })
        }
        catch (error) {

            console.log('Eor' + error.message);
        }

    }
}
export const getsavedsignin = () => {
    return async dispatch => {
        try {
            const result = await fetchUser()
            if (result.rows._array[0]) {
                const emailusuario = result.rows._array[0].email
                const passwordusuario = result.rows._array[0].password
                
    
                const responseExtra = await fetch(URL_AUTH_SIGNIN, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: emailusuario,
                            password: passwordusuario,
                            returnSecureToken: true
                        })
                    })
                const data = await responseExtra.json()
                
                const response = await fetch(`${URL_API}/users.json`, {
                    method: 'GET',
                    header: {
                        'Content-Type': 'application/json'
                    }
                })
                const respuesta = await response.json()
                let objeto = {}
                const arraydeusuarios = Object.keys(respuesta).map(function(clave) {
                    return respuesta[clave];
                  });
                arraydeusuarios.map(item => {if (item.email===data.email) {
                    objeto.Name = item.Name
                    objeto.Surname = item.Surname
                    objeto.NickName = item.NickName
                    objeto.Profile = item.Profile
                    objeto.FriendsRequests = item.FriendsRequests
                }})
                    
                
                
                
                dispatch({
                        type: GETSAVEDSIGNIN,
                        token: data.idToken,
                        userId: data.localId,
                        email: emailusuario,
                        friends: objeto.friends,
                        Name: objeto.Name,
                        Surname: objeto.Surname,
                        NickName: objeto.NickName,
                        Profile: objeto.Profile,
                        FriendsRequests: objeto.FriendsRequests
                    }) 
            }

        }
        catch (error) {

            console.log('EError aca' + error.message);
        }

    }
}
export const getNotifications = (email) => {
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

                let user = {}
                arraydeusuarios.map(item => {
                    if (item.email===email) {
                        user = item.FriendsRequests
                    }
                })

                dispatch({
                type: GETNOTIFICATIONS,
                notifications: user
            })
        }
        catch (error) {

            console.log('error' + error.message);
        }

    }
}
export const getFriends = (email) => {
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

                let user = {}
                arraydeusuarios.map(item => {
                    if (item.email===email) {
                        user = item.friends
                    }
                })

                dispatch({
                type: GETFRIENDS,
                friends: user
            })
        }
        catch (error) {

            console.log('error' + error.message);
        }

    }
}
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

            console.log('AAAAAAAAAA');
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