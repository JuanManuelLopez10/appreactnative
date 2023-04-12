import * as FileSystem from 'expo-file-system'
import { STATIC_MAP_API_KEY } from '../../constants/database'

export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (title, image, location) => {
    return async dispatch => {

        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${STATIC_MAP_API_KEY}`)
        if (!response.ok) {
            throw new Error('respuesta incorrecta')
        }
        const resData = await response.json()
        if(!resData.results){
            throw new Error('No hay localizacion')
        }
        const address = resData.results[0].formatted_address

        
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName
        
        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (err) {
            console.log(err.message);
            throw err
        }
        dispatch({ type: ADD_PLACE, payload: {title, image: Path, address, coords: location}})
    }
}