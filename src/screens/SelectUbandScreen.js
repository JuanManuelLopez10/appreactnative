import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { TouchableOpacity } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from 'expo-location'
import { Alert } from 'react-native'
import Colors from '../constants/Colors'
import { setlocationasado } from '../store/actions/asados.actions'

const SelectUbandScreen = ({ navigation }) => {
    const asado = useSelector(state => state.asado)
    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status!=='granted'){
            Alert.alert(
                'Permisos insuficientes',
                'Necesita dar permiso para obtener ubicación',
                [{text:'Ok'}]
            )
                return false
        }
        return true
    }
    const dispatch = useDispatch()
    let initialRegion = {
        latitude: -34.877815393926944,
        longitude: -54.861974604427814,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.421
    }
    const [searchedAddress, setsearchedAddress] = useState('')
    const [selectedLoc, setselectedLoc] = useState(null)

    const handleSearchAddress = (text) => {
        setsearchedAddress(text)
    }
    const SearchAddress = async (text) => {
        const SearchedAddresCoords = await Location.geocodeAsync(text)
        console.log('          Searchedaddresscoords', SearchedAddresCoords);
        if (SearchedAddresCoords[0]) {
            const coordsforsearch = {
                latitude: SearchedAddresCoords[0].latitude,
                longitude: SearchedAddresCoords[0].longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.421
            }
            setselectedLoc(coordsforsearch)
        } else {
            Alert.alert('No se encontró con exactitud la dirección', 'Por favor dar más detalles como ciudad, departamento, etc...')
        }
    }
    const selectLocation = event => {
        Alert.alert(`${event.nativeEvent.coordinate.latitude}`)
        // setselectedLoc({
        //     latitude: event.nativeEvent.coordinate.latitude,
        //     longitude: event.nativeEvent.coordinate.longitude
        // })
    }
    const GetCurrentLocation = async () => {
        const isLocationOk = await verifyPermissions()
        if (!isLocationOk) return

        const CurrentLocation = await Location.getCurrentPositionAsync()
        const locationactual = {
            latitude: CurrentLocation.coords.latitude,
            longitude: CurrentLocation.coords.longitude
        }
        setselectedLoc(locationactual)
    }
    const confirmAsadoLocation = async () => {
        if (selectedLoc) {
            const getubicacionstreet = await Location.reverseGeocodeAsync(selectedLoc)
            const ubicaciónstring = getubicacionstreet[0].street + ', ' +  getubicacionstreet[0].subregion
            console.log('ubiiii ', selectedLoc);
            dispatch(setlocationasado(selectedLoc.latitude, selectedLoc.longitude, ubicaciónstring))
            navigation.navigate('CreateAsado')
            // Alert.alert('¿Desea guardar esta ubicación?', `${ubicaciónstring}`, [{text: 'Omitir', onPress: () => {
            //     navigation.navigate('SelectTime')
            // }},{text: 'Si', onPress: () => {
            //     navigation.navigate('SelectGuests')
            // }}] )
        }else{
            Alert.alert('Por favor, selecciona una ubicación')
        }
    }
    console.log(asado);
    let initialRegiona = {
            latitude: -34.877815393926944,
            longitude: -54.861974604427814,
            latitudeDelta: 0.0022,
            longitudeDelta: 0.421
    }
    const newLocation = () => {
        if (asado){
            initialRegiona.latitude = asado.location.latitude
            initialRegiona.longitude = asado.location.longitude       
        }
}
    return (
        <View>
            {
            <MapView initialRegion={initialRegion} region={selectedLoc ? selectedLoc : initialRegion} onPress={selectLocation}  provider={PROVIDER_GOOGLE}  style={{ height: '65%', width: '100%' }}>
                {selectedLoc && <Marker title='Ubicacion' coordinate={{ latitude: selectedLoc.latitude, longitude: selectedLoc.longitude }} />}
            </MapView>                
            }

            <View style={{backgroundColor: 'white'}}>
            <View style={styles.SearchUbication}>
                <TextInput style={styles.SearchInput} onEndEditing={()=>{if (searchedAddress) {
                    SearchAddress(searchedAddress)
                }}} placeholder='Buscar ubicación' onChangeText={handleSearchAddress} />
            </View>
            <View style={styles.SearchUbication}>
                <TouchableOpacity onPress={GetCurrentLocation} style={styles.MyUbicationButton}>
                    <Text>Mi ubicación actual</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.ConfirmButton} onPress={() => confirmAsadoLocation()}>
                <Text style={styles.ConfirmButtonText}>Confirmar</Text>
            </TouchableOpacity>
            </View>

        </View>
    )
}

export default SelectUbandScreen

const styles = StyleSheet.create({
    asadoTypeView: {
        backgroundColor: Colors.light
    },
    asadotype: {
        marginVertical: heightPixel(15),
        marginHorizontal: widthPixel(10),
        fontSize: fontPixel(18)
    },
    SearchUbication: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',        
        alignSelf: 'center',
        marginVertical: heightPixel(20),
        backgroundColor: 'white',
        borderRadius: 10,
        height: heightPixel(50),
        borderColor: Colors.light,
        borderWidth: 1
    },
    SearchInput: {
        display: 'flex',
        width: '100%',
        textAlign: 'center',
    },
    MyUbicationButton: {
        width: '100%', 
        height:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'  
    },
    ConfirmButton: {        
        backgroundColor: Colors.primary,
        width: '50%',
        alignSelf: 'center',
        paddingHorizontal: widthPixel(10),
        paddingVertical: heightPixel(15),
        borderRadius: heightPixel(30),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    ConfirmButtonText: {
        color: Colors.light,
        alignSelf: 'center',
        fontSize: fontPixel(15)
    }
})