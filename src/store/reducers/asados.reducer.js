import { CREATEASADO, SETLOCATIONASADO } from "../actions/asados.actions";

const InitialState = {
    type: ''
}
const AsadoReducer = (state = InitialState, action) => {
    switch(action.type){
        case CREATEASADO:
            let newtype
            newtype = action.asadoType
            console.log('    type: ', newtype);

            return {
                ...state,
                type: newtype
            }
        case SETLOCATIONASADO:    
                return {
                    ...state,
                    location: action.location,
                    address: action.address
                }
                default:
            return state;

        }


    }

export default AsadoReducer;