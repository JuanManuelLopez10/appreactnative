import { ADDGUEST, CREATEASADO, SETLOCATIONASADO } from "../actions/asados.actions";

const InitialState = {
    type: ''
}
const AsadoReducer = (state = InitialState, action) => {
    switch(action.type){
        case CREATEASADO:
            let newtype
            newtype = action.asadoType
            console.log('    type: ', action.asadoDate);

            return {
                ...state,
                type: newtype,
                date: action.stringdate,
                readableDate: action.readableDate
            }
        case SETLOCATIONASADO:    
                return {
                    ...state,
                    location: action.location,
                    address: action.address
                }
        case ADDGUEST:
                return {
                    ...state,
                    invitados: action.invitados
                }   
                default:
            return state;

        }


    }

export default AsadoReducer;