import { URL_API } from "../../constants/database";

export const GETUSERS = 'GETUSERS'
export const SEARCHUSERS = 'SEARCHUSERS'

export const getusers = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/users.json`)

            const data = await response.json()

            dispatch({
                type: GETUSERS,
                users: data
            })
        }
        catch (error) {
            console.log('error' + error.message);
        }

    }
}

export const searchusers = (searchText) => {
    return async dispatch => {
        try {
            const responseUsers = await fetch(`${URL_API}/users.json`)

            const dataUsers = await responseUsers.json()
              const arraydeusuarios = Object.keys(dataUsers).map(function(clave) {
                return dataUsers[clave];
              });
              
            const responseAsados = await fetch(`${URL_API}/asados.json`)
            const dataAsados = await responseAsados.json()
            const arraydeAsados = Object.keys(dataAsados).map(function(clave) {
              return dataAsados[clave];
            });                
            let Searched = []

            arraydeusuarios.map(item => {if(item.email==searchText) {
                Searched.push(item)
            }})
            arraydeAsados.map(item => {if(item.email==searchText) {
                Searched.push(item)
            }})

            dispatch({
                type: SEARCHUSERS,
                results: Searched
            })
        }
        catch (error) {
            console.log('error en searchusers: ' + error);
        }

    }
}