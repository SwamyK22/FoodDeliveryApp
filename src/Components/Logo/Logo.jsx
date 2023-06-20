import { StyleSheet, Text, Image, View, Pressable } from 'react-native'
import React from 'react'

const Logo = ({page}) => {
  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/flash/service-call.png')} style={styles.img} />
            <Text style={styles.title}>{page} 
            {page === 'Login' ? ' to' : ''} your account</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    container: {
        width:'100%',
        // flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginVertical:10,
    },
    img:{
        width:40,
        height:40
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'#b500f7',
    },
})