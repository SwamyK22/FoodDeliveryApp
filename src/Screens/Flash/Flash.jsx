import { StyleSheet, Text, Dimensions, Image, LogBox } from 'react-native'
import React, {useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'


const Flash = ({navigation}) => {
    setTimeout(() => navigation.navigate('login'),2000)

    useEffect(()=>{
        LogBox.ignoreLogs(['ViewPropTypes'])
        LogBox.ignoreLogs(['Possible'])
        LogBox.ignoreLogs(['@fire'])
      },[])
  return (
    <SafeAreaView style={styles.constainer}>
        <Text style={styles.title}>Food Delivery App</Text>
        <Image source={require('../../../assets/flash/delivery-bike.png')} style={styles.img} />
    </SafeAreaView>
  )
}

export default Flash

const styles = StyleSheet.create({
    constainer: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        width:Dimensions.get('window').width/2,
        height: Dimensions.get('window').height / 4,
    },
    title:{
        fontSize:40,
        fontWeight:'bold',
        color:'#fc5203'
    }
})