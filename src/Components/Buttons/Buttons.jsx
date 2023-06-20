import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React from 'react'

const Buttons = (props) => {
  const {title} = props;
  return (
    <Pressable {...props} style={({pressed}) => [{backgroundColor: pressed ? '#9c0327' : '#fa023c'}, styles.container]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default Buttons

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width / 1.3,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginVertical:20
    },
    text: {
        color:'#ffff',
        fontWeight:'bold',
        fontSize:16
    }
})