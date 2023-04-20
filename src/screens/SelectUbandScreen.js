import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { Alert } from 'react-native'
import Colors from '../constants/Colors'

const SelectUbandScreen = ({ navigation }) => {
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
        setselectedLoc({
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude
        })
    }
    const asadotype = useSelector(state => state.asado)
    const confirmAsadoLocation = () => {
        // dispatch(setlocationasado(LocationValue.lat, LocationValue.lng, ))
    }

    return (
        <View>
            <MapView initialRegion={initialRegion} region={selectedLoc ? selectedLoc : initialRegion} onPress={selectLocation} style={{ height: '65%', width: '100%' }}>
                {selectedLoc && <Marker title='Ubicacion' coordinate={{ latitude: selectedLoc.latitude, longitude: selectedLoc.longitude }} />}
            </MapView>
            <View style={styles.asadoTypeView}>
                <Text style={styles.asadotype}>Tipo de asado: "{asadotype.type}"</Text>
            </View>
            <View style={styles.SearchUbication}>
                <TextInput style={styles.SearchInput} placeholder='Buscar ubicación' onChangeText={handleSearchAddress} />
                <Button onPress={() => SearchAddress(searchedAddress)} title='Buscar' />
            </View>
            <>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
            <TouchableOpacity onPress={() => confirmAsadoLocation()}>
                <Text>Confirmar</Text>
            </TouchableOpacity>
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 10
    },
    SearchInput: {
        width: '80%',
        padding: widthPixel(6)
    }
})