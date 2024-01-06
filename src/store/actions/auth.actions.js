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
export const VERIFYFINISHEDTASK = 'VERIFYFINISHEDTASK'
export const LOADCOMPLETEDTASKS = 'LOADCOMPLETEDTASKS'
export const ADDSESSION = 'ADDSESSION'
export const RELOAD = 'RELOAD'
export const CLAIM = 'CLAIM'
export const OPENPACK = 'OPENPACK'
export const GETITEMS = 'GETITEMS'
export const SELLGIFT = 'SELLGIFT'
export const USEGIFT = 'USEGIFT'
export const BUYPACK = 'BUYPACK'

export const signupothers = (email, Name, Profile) => {
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
                  const fecha = new Date()
                  const string = fecha.getDate().toString() + fecha.getMonth().toString() + fecha.getFullYear().toString() + fecha.getHours().toString() + fecha.getMinutes().toString() +fecha.getSeconds().toString()
              const obj = {id: string, pack: 0}

                  let date = new Date()
                  const day = date.getDate()
                  const month = date.getMonth()+1
                  const year = date.getFullYear()
                  const lastDate = {year:year, month:month, day:day}
  
                  const object = {claimed: false, completed:true, id:0}

                const packs = [obj]
                const money = 0
                const tasks = [{claimed:false, completed:true, id:0}]    
                const metrics =[{'class': 'session', 'value':1, 'name':'Inicios de sesión'}, 
                {'class':'buy', 'value':0, 'name':'Packs comprados'}, 
                {'class':'experience', 'value':0, 'name':'Experiencia'}, 
                {'class':'sell', 'value':0, 'name':'Items vendidos'},
                {'class':'use', 'value':0, 'name':'Items usados'},
                {'class':'walk', 'value':0, 'name':'Km caminados'},
                {'class':'work', 'value':0, 'name':'Días trabajados'},
                {'class':'read', 'value':0, 'name':'Páginas leídas'},
                {'class':'study', 'value':0, 'name':'Textos leídos'},
                {'class':'fruit', 'value':0, 'name':'Fruta comida'},
                lastDate]
                const gifts = [] 
                arraydeusuarios.map(item => {if (item.email===email) {
                    item.Name=Name
                    item.Profile=Profile
                    item.packs=packs
                    item.gifts= gifts
                    item.money=0
                    item.metrics= metrics
                    item.tasks=[object]   
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
                Profile,
                packs,
                money,
                metrics,
                tasks,
                gifts
            })
        }
        catch (error) {
            alert('signupothers')
            console.log('error signupothers' + error.message);
        }

    }
}

export const loadCompletedTasks = (email, id) => {
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
                  
                  let ta
                  let met
                  const object = {claimed: false, completed:true, id:id}
                arraydeusuarios.map(item => {if (item.email===email) {
                    item.tasks.map(task=>{
                        if(task.id===id){
                            console.log('ya está')
                        }else{
                            item.tasks.push(object)
                            ta = item.tasks
                           met = item.metrics[item.metrics.findIndex(it => it.class==='experience')].value + 150 
                        }
                    })

                }})
                const response = await fetch(`${URL_API}/users/.json`, {
                    method: 'PUT',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arraydeusuarios)
                })

                dispatch({
                type: LOADCOMPLETEDTASKS,
                tasks: ta,
                metrics: met
            })
        }
        catch (error) {

            alert('loadcompleted')
            console.log('error loadCompletedTasks' + error.message);
        }

    }
}
export const addSession = (email) => {
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
                let date = new Date()
                const day = date.getDate()
                const month = date.getMonth() + 1
                const year = date.getFullYear()
                let lastDate = {year:year, month:month, day:day}
                arraydeusuarios.map(item => {if (item.email===email) {
                    let metric 
                    let index
                    let indexotrametric
                    item.metrics.map(metrica => {
                        if (metrica.day) {
                            metric= metrica
                            index = item.metrics.indexOf(metrica)
                        }else if(metrica.class==='session'){
                            indexotrametric = item.metrics.indexOf(metrica)
                        }
                    })
                    if (metric) {
                        if (metric.year<year) {
                            item.metrics[indexotrametric].value = item.metrics[indexotrametric].value + 1
                            item.metrics[index] = lastDate
                        }else if(metric.year===year && metric.month<month){
                            item.metrics[indexotrametric].value = item.metrics[indexotrametric].value + 1
                            item.metrics[index] = lastDate
                        }else if(metric.year===year && metric.month===month && metric.day<day){
                            item.metrics[indexotrametric].value = item.metrics[indexotrametric].value + 1
                            item.metrics[index] = lastDate
                        }
                    }else{
                        item.metrics[indexotrametric].value = item.metrics[indexotrametric].value + 1
                        item.metrics.lastDate = lastDate
                    }
                }})
                const response = await fetch(`${URL_API}/users/.json`, {
                    method: 'PUT',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arraydeusuarios)
                })

                dispatch({
                type: ADDSESSION,
                lastDate: lastDate
            })
        }
        catch (error) {
            alert('addSession')

            console.log('error addSession  ---' + error.message);
        }

    }
}
export const claim = (email, id, estilo, price) => {
    return async dispatch => {
        try {
                const responseExtra = await fetch(`${URL_API}/users.json`, {
                    method: 'GET',
                    header: {
                        'Content-Type': 'application/json'
                    }
                })
                const respuesta = await responseExtra.json()
                console.log('hasta aca bien');
                const arraydeusuarios = Object.keys(respuesta).map(function(clave) {
                    return respuesta[clave];
                  });
                let cosa
                let pack
                let metrics
                let money = 0
                  arraydeusuarios.map(item => {if (item.email===email) {
                    item.tasks.map(task=>{
                        if (task.id===id) {
                            task.claimed= true
                            cosa = item
                        }
                    })
                    item.metrics[item.metrics.findIndex(i => i.class==='experience')].value += 150
                    metrics = item.metrics
                    if(estilo==='packs'){
                        const fecha = new Date()
                        const string = fecha.getDate().toString() + fecha.getMonth().toString() + fecha.getFullYear().toString() + fecha.getHours().toString() + fecha.getMinutes().toString() +fecha.getSeconds().toString()
    
                        if (item.packs) {
                        const obj = {id: string, pack: id}
    
                            item.packs.push(obj)                        
                        }else{
                        const obj = {id: string, pack: id}
    
                            item.packs = [obj]
                        }
                        pack = item.packs
                    }else if(estilo==='money'){
                        item.money = item.money + price
                        money = item.money
                    }
                    cosa = item

                }})
                const response = await fetch(`${URL_API}/users/.json`, {
                    method: 'PUT',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arraydeusuarios)
                })

                dispatch({
                type: CLAIM,
                tasks: cosa.tasks,
                packs: pack,
                money: money,
                metrics: metrics
            })
        }
        catch (error) {
            alert('claim')

            console.log('error Claim' + error.message);
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
            alert('verifynick')

            console.log('error verifyUserNickname'  + error.message);
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

            alert('signup')
            console.log('error signup  -  ' + error.message);
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
         console.log('hh');

            const arraydeusuarios = Object.keys(respuesta).map(function(clave) {
                return respuesta[clave];
              });
            arraydeusuarios.map(item => {if (item.email===data.email) {
                objeto.Name = item.Name
                objeto.Surname = item.Surname
                objeto.Profile = item.Profile
                objeto.money = item.money
                objeto.metrics = item.metrics
                objeto.packs = item.packs
                objeto.tasks = item.tasks
                objeto.gifts = item.gifts
            }})

            const result = await insertUser(email, password)

            dispatch({
                    type: SIGNIN,
                    token: data.idToken,
                    userId: data.localId,
                    email: email,
                    password,
                    Name: objeto.Name,
                    Profile: objeto.Profile,
                    money: objeto.money,
                    metrics: objeto.metrics,
                    packs: objeto.packs,
                    tasks: objeto.tasks,
                    gifts: objeto.gifts,
            })
        }
        catch (error) {
            alert(error.message)

            console.log('Eor signin' + error.message);
        }

    }
}
export const logout = () => {
    return async dispatch => {
        try {
            const dele = await deleteUser()
            console.log('signout');
            dispatch({
                    type: LOGOUT,
            })
        }
        catch (error) {
            alert(error.message)

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
                    objeto.Profile = item.Profile
                    objeto.money = item.money
                    {
                        item.packs
                        ?objeto.packs = item.packs
                        :objeto.packs = []
                    }
                    {
                        item.metrics
                        ?objeto.metrics = item.metrics
                        :objeto.metrics = []
                    }
                    {
                        item.tasks
                        ?objeto.tasks = item.tasks
                        :objeto.tasks = []
                    }
                    {
                        item.gifts
                        ?objeto.gifts = item.gifts
                        :objeto.gifts = []
                    }
                }})
                    
                
                
                
                dispatch({
                        type: GETSAVEDSIGNIN,
                        token: data.idToken,
                        userId: data.localId,
                        email: emailusuario,
                        Name: objeto.Name,
                        money: objeto.money,
                        Profile: objeto.Profile,
                        packs: objeto.packs,
                        metrics: objeto.metrics,
                        tasks: objeto.tasks,
                        gifts: objeto.gifts
                    }) 
            }

        }
        catch (error) {
            alert(error.message)

            console.log('EError getsavedsignin' + error.message);
        }

    }
}
export const reload = (email) => {
    return async dispatch => {
        try {
                
                const response = await fetch(`${URL_API}/users.json`, {
                    method: 'GET',
                    header: {
                        'Content-Type': 'application/json'
                    }
                })

                const respuesta = await response.json()
                
                const arraydeusuarios = Object.keys(respuesta).map(function(clave) {
                    return respuesta[clave];
                  });
                let usuario
                arraydeusuarios.map(item => {if (item.email===email) {
                    usuario = item
                }})
                
                
                dispatch({
                        type: RELOAD,
                        money: usuario.money,
                        packs: usuario.packs,
                        metrics: usuario.metrics,
                        tasks: usuario.tasks
                    }) 
            }
        catch (error) {
            alert(error.message)

            console.log('EError aca reload' + error.message);
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
            alert('getfr')

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

                dispatch({
                type: CHANGEMODE,
                darkMode: newMode
            })
        }
        catch (error) {
            alert('changemode')

            console.log('error' + error.message);
        }

    }
}
export const verifyFinishedTask = (tasks, email) => {
    return async dispatch => {
        try {
                  const responseUsers = await fetch(`${URL_API}/users.json`, {
                    method: 'GET',
                    header: {
                        'Content-Type': 'application/json'
                    }
                })
                const respuestaUsers = await responseUsers.json()
                
                const arraydeusers = Object.keys(respuestaUsers).map(function(clave) {
                    return respuestaUsers[clave];
                  });
                  let probando
                  arraydeusers.map(item => {if (item.email===email) {
                    probando = item.tasks
                    item.metrics.map(itemmetric => {
                        tasks.map(task=>{
                            if(itemmetric.class === task.task && task.divisions<=itemmetric.value){
                                if (probando.findIndex(prob => prob.id===task.id)===-1) {
                                const obj = {claimed:false, completed:true, id:task.id}
                                probando.push(obj)
                            }

                            }
                            if(itemmetric.class === task.task && task.divisions>itemmetric.value){
                                if(probando.findIndex(prob => prob.id===task.id)!==-1){
                                    probando.splice(probando.findIndex(prob => prob.id===task.id),1)
                                }

                            }
                        })
                    })
                    item.tasks = probando
                }})
                const response = await fetch(`${URL_API}/users/.json`, {
                    method: 'PUT',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arraydeusers)
                })

                dispatch({
                type: VERIFYFINISHEDTASK,
                tasks: probando
            })
        }
        catch (error) {
            alert('verifyfin')

            console.log('error verifyFinishedTask' + error.message);
        }

    }
}
export const openPack = (email, packId, arrayofitems) => {
    return async dispatch => {
        try {
                const responseExtra = await fetch(`${URL_API}/users.json`, {
                    method: 'GET',
                    header: {
                        'Content-Type': 'application/json'
                    }
                })
                const respuesta = await responseExtra.json()
                let nuevoarray
                let nuevoarray2
                const arraydeusuarios = Object.keys(respuesta).map(function(clave) {
                    return respuesta[clave];
                  });
                  arraydeusuarios.map(item => {if (item.email===email) {
                    let array = []
                    item.packs.map(packk => {
                        if (packk.id === packId) {
                            item.packs.splice(packk, 1)
                        }
                    })
                    
                    nuevoarray= item.packs

                    if(item.gifts){
                        arrayofitems.map(ite => {
                            if(item.gifts.findIndex(i => i.name === ite.name)!==-1){
                                item.gifts[item.gifts.findIndex(i => i.name === ite.name)].quantity = item.gifts[item.gifts.findIndex(i => i.name === ite.name)].quantity + 1
                            }else{
                                ite.quantity= 1
                                item.gifts.push(ite)
                            }
                            nuevoarray2 = item.gifts
                        })
                    }else{
                        arrayofitems.map(i => {
                                i.quantity = 1
                        })
                        item.gifts = arrayofitems
                        nuevoarray2 = arrayofitems
                    }

                }})
                const response = await fetch(`${URL_API}/users/.json`, {
                    method: 'PUT',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arraydeusuarios)
                })
                dispatch({
                type: OPENPACK,
                packs: nuevoarray,
                gifts: nuevoarray2
            })
        }
        catch (error) {
            alert('openpack')

            console.log('error addSession' + error.message);
        }

    }
}
export const buyPack = (email, packId, price) => {
    return async dispatch => {
        try {
                const responseExtra = await fetch(`${URL_API}/users.json`, {
                    method: 'GET',
                    header: {
                        'Content-Type': 'application/json'
                    }
                })
                const respuesta = await responseExtra.json()
                const fecha = new Date()
                const string = fecha.getDate().toString() + fecha.getMonth().toString() + fecha.getFullYear().toString() + fecha.getHours().toString() + fecha.getMinutes().toString() +fecha.getSeconds().toString()
                let nuevoarray
                let plata 
                const arraydeusuarios = Object.keys(respuesta).map(function(clave) {
                    return respuesta[clave];
                  });
                  const paquete = {id:string, pack:packId}

                  arraydeusuarios.map(item => {if (item.email===email) {
                    item.packs.push(paquete)
                    item.money = item.money - price
                    plata = item.money
                    nuevoarray= item.packs

                }})

                const response = await fetch(`${URL_API}/users/.json`, {
                    method: 'PUT',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arraydeusuarios)
                })
                dispatch({
                type: BUYPACK,
                packs: nuevoarray,
                money: plata 
            })
        }
        catch (error) {
            alert('buypack')

            console.log('error buypack' + error.message);
        }

    }
}

export const getItems = (email, arrayofitems) => {
    return async dispatch => {
        try {
                const responseExtra = await fetch(`${URL_API}/users.json`, {
                    method: 'GET',
                    header: {
                        'Content-Type': 'application/json'
                    }
                })
                const respuesta = await responseExtra.json()
                let nuevoarray
                const arraydeusuarios = Object.keys(respuesta).map(function(clave) {
                    return respuesta[clave];
                  });
                  arraydeusuarios.map(item => {if (item.email===email) {

                }})
                const response = await fetch(`${URL_API}/users/.json`, {
                    method: 'PUT',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arraydeusuarios)
                })
                dispatch({
                type: GETITEMS,
                gifts: nuevoarray
            })
        }
        catch (error) {
            alert('getitems')

            console.log('error addSession' + error.message);
        }

    }
}
export const sellGift = (gift, email) => {
    return async dispatch => {
        try {
                const responseExtra = await fetch(`${URL_API}/users.json`, {
                    method: 'GET',
                    header: {
                        'Content-Type': 'application/json'
                    }
                })
                const respuesta = await responseExtra.json()
                let nuevoarray
                let nuevometric
                const arraydeusuarios = Object.keys(respuesta).map(function(clave) {
                    return respuesta[clave];
                  });
                  let mon 
                  arraydeusuarios.map(item => {if (item.email===email) {
                    const inde = item.gifts.findIndex(gi => gi.name===gift.name)
                    item.gifts[inde].quantity =  item.gifts[inde].quantity - 1
                    if (item.gifts[inde].quantity <=0) {
                        item.gifts.splice(inde, 1)
                    }
                    item.metrics.map(metric => {
                        if (metric.class==='sell') {
                            metric.value= metric.value+1
                        }
                    })

                    item.money = item.money + gift.sellPrice
                    mon = item.money
                    nuevoarray= item.gifts
                    nuevometric = item.metrics
                }})
                const response = await fetch(`${URL_API}/users/.json`, {
                    method: 'PUT',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arraydeusuarios)
                })
                dispatch({
                type: SELLGIFT,
                gifts: nuevoarray,
                money: mon,
                metrics: nuevometric
            })
        }
        catch (error) {
            alert('getitems')

            console.log('error addSession' + error.message);
        }

    }
}
export const useGift = (gift, email) => {
    return async dispatch => {
        try {
                const responseExtra = await fetch(`${URL_API}/users.json`, {
                    method: 'GET',
                    header: {
                        'Content-Type': 'application/json'
                    }
                })
                const respuesta = await responseExtra.json()
                let nuevoarray
                const arraydeusuarios = Object.keys(respuesta).map(function(clave) {
                    return respuesta[clave];
                  });
                  arraydeusuarios.map(item => {if (item.email===email) {
                    const inde = item.gifts.findIndex(gi => gi.name===gift.name)
                    item.gifts[inde].quantity =  item.gifts[inde].quantity - 1
                    if (item.gifts[inde].quantity <=0) {
                        item.gifts.splice(inde, 1)
                    }

                    nuevoarray= item.gifts
                }})
                const response = await fetch(`${URL_API}/users/.json`, {
                    method: 'PUT',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arraydeusuarios)
                })
                dispatch({
                type: USEGIFT,
                gifts: nuevoarray,
            })
        }
        catch (error) {
            alert('getitems')

            console.log('error addSession' + error.message);
        }

    }
}