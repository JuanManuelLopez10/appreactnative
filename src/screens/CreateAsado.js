import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SelectDropdown from 'react-native-select-dropdown'
import { TouchableOpacity } from 'react-native'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import Colors from '../constants/Colors'
import { selectType } from '../store/actions/asados.actions'
import { Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const CreateAsado = ({ navigation }) => {
    const dispatch = useDispatch()

    const options = ['Privado', 'Con invitación']
    const Account = useSelector(state => state.auth)
    const [selectedOption, setSelectedOption] = useState('')
    const confirmType = () => {
        if (selectedOption === 'Privado') {
            Alert.alert('Esta opción todavia no está disponible')
        } else if (selectedOption === 'Con invitación') {
            dispatch(selectType(selectedOption))
            navigation.navigate('SelectUbicationAndDate')
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
                <TouchableOpacity style={styles.ConfirmButton} onPress={confirmType} >
                    <Text style={styles.ConfirmButtonText}>Confirmar</Text>
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
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    ScreenTitle: {
        fontSize: fontPixel(30),
        fontWeight: 600,
        color: Colors.primary,
    },
    DropdownButton: {
        width: '70%',
        borderColor: Colors.light,
        borderWidth: 2,
        borderRadius: 20,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
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
    }
})