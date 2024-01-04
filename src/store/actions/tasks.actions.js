import { URL_API } from "../../constants/database";

export const GETTASKS = 'GETTASKS'
export const UPLOADSUBTASK = 'UPLOADSUBTASK'
export const GETSUBTASKS = 'GETSUBTASKS'
export const UPLOADTASK = 'UPLOADTASK'

export const gettasks = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/tasks.json`)

            const data = await response.json()
            dispatch({
                type: GETTASKS,
                tasks: data
            })
        }
        catch (error) {
            console.log('error' + error.message);
        }

    }
}
export const getsubtasks = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/subtasks.json`)

            const data = await response.json()
            dispatch({
                type: GETSUBTASKS,
                subtasks: data
            })
        }
        catch (error) {
            console.log('error' + error.message);
        }

    }
}
export const uploadTask = (objeto) => {
    return async dispatch => {
        try {
                const responseExtra = await fetch(`${URL_API}/tasks.json`, {
                    method: 'GET',
                    header: {
                        'Content-Type': 'application/json'
                    }
                })
                const respuesta = await responseExtra.json()
                const arraydeusuarios = Object.keys(respuesta).map(function(clave) {
                    return respuesta[clave];
                  });
                  objeto.id = arraydeusuarios.length
                  arraydeusuarios.push(objeto)

                  const response = await fetch(`${URL_API}/tasks/.json`, {
                    method: 'PUT',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arraydeusuarios)
                })
                console.log('openPack');
                dispatch({
                type: UPLOADTASK,
                tasks: arraydeusuarios
            })
        }
        catch (error) {

            console.log('error addSession' + error.message);
        }

    }
}
export const uploadSubtask = (objeto) => {
    return async dispatch => {
        try {
                const responseExtra = await fetch(`${URL_API}/subtasks.json`, {
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

                  const response = await fetch(`${URL_API}/subtasks/.json`, {
                    method: 'PUT',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arraydeusuarios)
                })
                console.log('openPack');
                dispatch({
                type: UPLOADSUBTASK,
                subtasks: arraydeusuarios
            })
        }
        catch (error) {

            console.log('error addSession' + error.message);
        }

    }
}