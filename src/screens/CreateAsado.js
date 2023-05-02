import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SelectDropdown from 'react-native-select-dropdown'
import { TouchableOpacity } from 'react-native'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import Colors from '../constants/Colors'
import { selectType, settypeanddate } from '../store/actions/asados.actions'
import { Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import DateTimePickerModal from 'react-native-modal-datetime-picker'


const CreateAsado = ({ navigation }) => {
    const dispatch = useDispatch()

    const options = ['Privado', 'Con invitación']
    const asado = useSelector(state => state.asado)

    const [selectedOption, setSelectedOption] = useState('')


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [DateSelected, setDateSelected] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (feccha) => {
        hideDatePicker()
        const Daate = feccha.toString()
        

        const fecha = new Date(Daate)

        const day = fecha.getDate()
        const month = fecha.getMonth()
        const year = fecha.getFullYear()
        const minute = fecha.getMinutes()
        const hour = fecha.getHours()
        const fechacompleta = ' ' + day + '/' + month + '/' + year + ' - ' + hour + ':' + minute
        const object = {
            string: Daate,
            readabledate: fechacompleta
        }
        setDateSelected(object)
    };

    const confirmAsado = () => {
        if(selectedOption==='Con invitación' && DateSelected && asado.location){
            dispatch(settypeanddate(selectedOption, DateSelected.string, DateSelected.readabledate))
            navigation.navigate('SelectGuests')
        }else if(selectedOption && DateSelected===null && asado.location){
            Alert.alert('Falta fecha')
        }else if(selectedOption && DateSelected && asado.location===null){
            Alert.alert('Falta ubicación')
        }else if(selectedOption==='' && DateSelected && asado.location){
            Alert.alert('Falta tipo de asado')
        }else if(selectedOption==='' && DateSelected && asado.location===null){
            Alert.alert('Falta tipo de asado y ubicación')
        }else if(selectedOption===null && DateSelected===null && asado.location){
            Alert.alert('Falta tipo de asado y fecha')
        }else if(selectedOption && DateSelected===null && asado.location===null){
            Alert.alert('Falta fecha y ubicación')
        }else if(selectedOption==='Privado'){
            Alert.alert('Tipo de asado (Privado) no disponible')
        }else{
            Alert.alert('Seleccione las características del asado')
        }
    
    }

    return (
        <View style={styles.Screen}>
            <View>
                <Text style={styles.ScreenTitle}>Selecciona el tipo de asado</Text>
                <SelectDropdown
                    data={options}
                    buttonStyle={styles.DropdownButton}
                    onSelect={(selection) => { setSelectedOption(selection) }}
                    defaultButtonText={<><Text>Selecciona una opción</Text><Ionicons name='arrow-down' size={fontPixel(20)} /></>} />

            </View>
            <View>
                <Text style={styles.ScreenTitle}>Ubicación del asado</Text>
                <TouchableOpacity style={styles.DropdownButton} onPress={() => navigation.navigate('SelectUbicationAndDate')} >
                    <Text numberOfLines={1} style={styles.Setubication}>{asado.location ? asado.address : 'Confirmar'}</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.ScreenTitle}>Fecha del asado</Text>
                <TouchableOpacity style={styles.DropdownButton} onPress={showDatePicker} >
                    <Text numberOfLines={1} style={styles.Setubication}>{DateSelected ? DateSelected.readabledate : 'Seleccionar fecha'}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="datetime"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
            <View>
                <TouchableOpacity onPress={confirmAsado} style={[styles.DropdownButton, {backgroundColor: Colors.primary}]}>
                    <Text numberOfLines={1} style={[styles.Setubication, {color: Colors.light}]}>Continuar</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={{ color: Colors.primary, textDecorationLine: 'underline' }}>Necesito ayuda</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreateAsado

const styles = StyleSheet.create({
    Screen: {
        height: '100%',
        width: '100%',
        paddingVertical: heightPixel(30),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ScreenTitle: {
        fontSize: fontPixel(20),
        marginBottom: heightPixel(5),
        fontWeight: 600,
        color: Colors.primary,
        alignSelf: 'center'
    },
    DropdownButton: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: Colors.light,
        borderWidth: 2,
        borderRadius: 20,
        alignSelf: 'center',
        alignContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        width: widthPixel(260),
        height: heightPixel(50)
    },
    ConfirmButton: {
        marginTop: heightPixel(20),
        backgroundColor: Colors.primary,
        padding: widthPixel(10),
        borderRadius: 5,
        width: '75%',
        alignSelf: 'center'
    },
    ConfirmButtonText: {
        fontSize: fontPixel(20),
        color: Colors.light
    },
    Setubication: {
        fontSize: fontPixel(17)
    }
})