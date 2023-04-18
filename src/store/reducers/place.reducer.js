import { ADD_PLACE, LOAD_PLACE } from '../actions/place.actions'

import Place from '../../models/Place'

const initialState = {
    places: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case ADD_PLACE:
            const newPlace = new Place(
                Date.now(), 
                action.payload.id.toString(), 
                action.payload.title, 
                action.payload.image, 
                action.payload.lat,
                action.payload.lng,
                )
            return {
                ...state,
                places: state.places.concat(newPlace)
            }
            case LOAD_PLACE: 
                return{
                    ...state,
                    places: action.places.map(item => new Place(
                        item.id.toString(),
                        item.title,
                        item.image
                    ))
                }
            default: 
            return state
        }
}