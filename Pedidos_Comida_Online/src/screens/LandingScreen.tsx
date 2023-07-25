import React, {useState,useReducer, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

<<<<<<< HEAD
import * as Location from 'expo-location'

const screenWidth = Dimensions.get('screen').width

=======
>>>>>>> parent of b6e1fce (Landing page diseno)
export const LandingScreen = () => {

    const [errorMsg, setErrorMsg] = useState("")
    const [address, setAddress] = useState<Location.LocationGeocodedAddress>()

    const [displayAddress, setDisplayAddress] = useState("Esperando ubicacion")

    useEffect(() => {
        ( async ()=>{

            let {status} = await Location.requestForegroundPermissionsAsync();

            if( status !== 'granted'){
                setErrorMsg('Permiso para acceder a la ubicacion denegado')
            }

            let location: any = await Location.getCurrentPositionAsync({});

            const {coords} = location

            if(coords){
                const {latitude, longitude} = coords;

                let addressResponse: any = await Location.reverseGeocodeAsync({latitude,longitude})

                for(let item of addressResponse){
                    setAddress(item)
                    let currentAddress = `${item.name},${item.street}, ${item.postalCode},${item.Country}`
                    setDisplayAddress(currentAddress)
                    return;
                }
            } else{
            //    Mensaje que algo fue mal obteniendo ubicacion
            }
        })
    }, []) 

    return (
<<<<<<< HEAD
        <View style={styles.container}>
            <View style={styles.navigation}>
                
            </View>
            <View style={styles.body}>
                <Image source={require('../images/delivery_icon.png')} style={styles.deliveryIcon} />
                <View style={styles.addressContainer}>
                    <Text style={styles.addressTitle}>Tu Dirección de Entrega</Text>
                </View>

                <Text style={styles.addressText}>{displayAddress}</Text>
            </View>
            <View style={styles.footer}/>
=======
        <View>
            <Text> Pagina Inicio </Text>
>>>>>>> parent of b6e1fce (Landing page diseno)
        </View>
    )
    
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: 'green'
    },
})