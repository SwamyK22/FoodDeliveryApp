import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React from 'react'

const Input = (props) => {
    const { placeholder, inputStyle } = props;

  return (
    <View style={[inputStyle,styles.container]}>
      <TextInput  {...props} placeholder={placeholder} style={styles.input} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.3,
        height: 40,
        justifyContent:'center',
        borderColor:'#8b8c8b'
    },
    input: {
        paddingHorizontal:5,
        fontSize:18,
        fontWeight:'400',
        color:'#f75600'
    },
})