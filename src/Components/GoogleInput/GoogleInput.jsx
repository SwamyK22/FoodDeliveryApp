import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'

const GoogleInput = ({img, title}) => {
  return (
    <Pressable style={styles.container}>
        <Image source={img} style={styles.img} />
      <Text>{title}</Text>
    </Pressable>
  )
}

export default GoogleInput

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width / 1.3,
        height:40,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        borderWidth:1, 
        marginVertical:5,
        justifyContent:'space-evenly'
    },
    img:{
        width:30,
        height:30
    }
})