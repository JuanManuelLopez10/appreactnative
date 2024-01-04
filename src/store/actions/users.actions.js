import { Alert } from "react-native";
import { URL_API } from "../../constants/database";

export const GETUSERS = 'GETUSERS'
export const SEARCHUSERS = 'SEARCHUSERS'
export const SELECTUSERSEARCHED = 'SELECTUSERSEARCHED'
export const FETCHIMAGENES = 'FETCHIMAGENES'
export const SENDFRIENDREQUEST = 'SENDFRIENDREQUEST'

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
export const searchusers = (searchText, user) => {
    return async dispatch => {
        try {
            const responseUsers = await fetch(`${URL_API}/users.json`)

            const dataUsers = await responseUsers.json()
            const arraydeusuarios = Object.keys(dataUsers).map(function (clave) {
                return dataUsers[clave];
            });


            const SearchedbyEmail = arraydeusuarios.filter(user =>
                user.email.toLowerCase().includes(searchText.toLowerCase())
            );
            const SearchedByName = arraydeusuarios.filter(user =>
                user.Name.toLowerCase().includes(searchText.toLowerCase())
            );
            const SearchedByNickName = arraydeusuarios.filter(user =>
                user.NickName.toLowerCase().includes(searchText.toLowerCase())
            );
            let Searched = [] 

            SearchedByName.map(item => Searched.push(item))
            SearchedbyEmail.map(item => Searched.push(item))
            SearchedByNickName.map(item => Searched.push(item))

            const uniqueArr = Searched.filter(
                (obj, index) => Searched.findIndex(elem => elem.id === obj.id && elem.name === obj.name) === index
              );
            const arrayWithoutUser = uniqueArr.filter(item => item.email!==user.email)
            dispatch({
                type: SEARCHUSERS,
                results: arrayWithoutUser
            })
        }
        catch (error) {
            console.log('error en searchusers: ' + error);
        }

    }
}

