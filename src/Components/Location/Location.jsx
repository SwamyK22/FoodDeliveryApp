import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const Location = () => {
  return (
    <View style={styles.container}>
        
            <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:5}}>
            <Image source={require('../../../assets/location/navigation.png')} style={[styles.img, {tintColor:'orange'}]} />
            <Text style={styles.location}>Vijaynagar</Text>
            </View>
            <Text numberOfLines={1} style={styles.address}>North Vijaynagar, Prashanthnagr, Govind...</Text>
        
    </View>
  )
}

export default Location

const styles = StyleSheet.create({
    img:{
        width:30,
        height:30,
        marginHorizontal:10,
    },
    container:{
        width:'100%'
    },
    location:{
        fontWeight:'bold',
        fontSize:18
    },
    address:{
        fontWeight:'bold',
        fontSize:14,
        color:'#999897',
        paddingLeft:50,
    }
})