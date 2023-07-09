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
import { LinearGradient } from 'expo-linear-gradient';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'



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
        const minute = fecha.getMinutes()<10 ? '0'+fecha.getMinutes() : fecha.getMinutes()
        const hour = fecha.getHours()
        const fechacompleta = ' ' + day + '/' + month + '/' + year + ' - ' + hour + ':' +   minute
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
        }else if(selectedOption && DateSelected===null && asado.location===null){
            Alert.alert('Falta fecha y ubicación')
        }else{
            Alert.alert('Seleccione las características del asado')
        }
    
    }
    

    return (
    <LinearGradient colors={[Colors.darkBackground, Colors.darksecondaryBackground]} start={{ x: 0, y: 0 }} style={{height:'100%'}}>
        <View style={styles.Screen}>
            <View style={{height:heightPixel(130), width:'100%', display:'flex', justifyContent:'flex-end'}}>
                <Text style={{fontSize:fontPixel(40), color:'white', marginLeft: widthPixel(15)}} >NUEVO ASADO</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.DropdownButton} onPress={() => navigation.navigate('SelectUbicationAndDate')} >
                    <Text numberOfLines={1} style={styles.Setubication}>{asado.location ? asado.address : 'Buscar ubicación'}</Text>          
                </TouchableOpacity>
            </View>

            <View>
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
                <TouchableOpacity style={styles.DropdownButton} onPress={()=>{navigation.navigate('SelectGuests')}} >
                    <Text numberOfLines={1} style={styles.Setubication}>Seleccionar comida</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.DropdownButton} onPress={()=>{navigation.navigate('SelectGuests')}} >
                    <Text numberOfLines={1} style={styles.Setubication}>Invitar amigos</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={{ color: Colors.primary, textDecorationLine: 'underline', fontSize:fontPixel(15) }}>Necesito ayuda</Text>
            </TouchableOpacity>
            <View>
            <LinearGradient colors={[Colors.primary, Colors.secondary]} start={{ x: 0, y: 0 }} style={[styles.DropdownButton, {borderColor:Colors.darkthirdBackground}]}>
                        
                        <TouchableOpacity style={[styles.Button, {marginBottom:0}]} onPress={confirmAsado}>
                            <Text style={{fontSize:fontPixel(20)}} >Iniciar sesión</Text>
                        </TouchableOpacity>
            </LinearGradient>

            </View>

        </View>
    </LinearGradient>
    )
}

export default CreateAsado

const styles = StyleSheet.create({
    Screen: {
        height: '95%',
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
        borderColor: 'white',
        borderWidth: 2,
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
        width: widthPixel(320),
        height: heightPixel(50)
    },
    ConfirmButton: {
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
        fontSize: fontPixel(17),
        color:'white'
    }
})