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
export const selectusersearched = (user) => {
    return async dispatch => {
        try {

            dispatch({
                type: SELECTUSERSEARCHED,
                userSearched: user
            })
        }
        catch (error) {
            console.log('error en searchusers: ' + error);
        }

    }
}
export const sendFriendRequest = (user, SearchedUserId, typeOfNotification) => {
    return async dispatch => {
        try {
            const responseUsers = await fetch(`${URL_API}/users.json`)
            
            const dataUsers = await responseUsers.json()
            const arraydeusuarios = Object.keys(dataUsers).map(function (clave) {
                return dataUsers[clave];
            });

            let notification = {}

            const userfiltered = {
                Name: user.Name,
                NickName: user.NickName,
                Surname: user.Surname,
                email: user.email,
                userId: user.userId,
                Profile: user.Profile,
            }
            arraydeusuarios.map(item=>{
                if (item.id===user.userId) {
                    notification.Type = typeOfNotification
                    notification.UserSender = userfiltered
                }


                if (item.id===SearchedUserId) {
                    if (item.FriendsRequests) {
                        const requests = item.FriendsRequests
                        requests.map(noti=>{
                            if (noti.UserSender.email===user.email) {
                                Alert.alert('Ya hay solicitud enviada')
                            }else{
                                item.FriendsRequests.push(notification)
        
                            }
                        })
                    }else{

                        item.FriendsRequests=[notification]
                    }
                }
            })
            
            const response = await fetch(`${URL_API}/users/.json`, {
                method: 'PUT',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(arraydeusuarios)
            })



            // dispatch({
            //     type: SENDFRIENDREQUEST,
            //     userSearched: user
            // })
        }
        catch (error) {
            console.log('error en searchusers: ' + error);
        }

    }
}
export const confirmRequest = (userWhoAccept, userAccepted) => {
    return async dispatch => {
        try {
            const responseUsers = await fetch(`${URL_API}/users.json`)
            
            const dataUsers = await responseUsers.json()
            const arraydeusuarios = Object.keys(dataUsers).map(function (clave) {
                return dataUsers[clave];
            });

            arraydeusuarios.map(item=>{
                if (item.email===userWhoAccept.email) {

                    if (item.friends) {
                        item.friends.map( friend =>{
                            if(friend.email===userAccepted.email){
                                console.log('ya es tu amigo');
                            }else{
                                item.friends.push(userAccepted)
                            }
                        })
                    }else{
                        item.friends = [userAccepted]
                    }
                    
                    const filtrado = item.FriendsRequests.filter(notification => notification.UserSender.email!==userAccepted.email)
                
                    item.FriendsRequests= filtrado
                }else if (item.email===userAccepted.email) {

                    if (item.friends) {
                        item.friends.map( friend =>{
                            if(friend.email===userWhoAccept.email){
                                console.log('ya es tu amigo');
                            }else{
                                item.friends.push(userWhoAccept)
                            }
                        })
                    }else{
                        item.friends = [userWhoAccept]
                    }

                }

            })
            
            const response = await fetch(`${URL_API}/users/.json`, {
                method: 'PUT',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(arraydeusuarios)
            })



            // dispatch({
            //     type: SENDFRIENDREQUEST,
            //     userSearched: user
            // })
        }
        catch (error) {
            console.log('error en searchusers: ' + error);
        }

    }
}