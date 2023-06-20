import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrLine = () => {
  return (
    <View style={styles.Container}>
            <View style={{flex: 1, height: 1, backgroundColor: '#123'}} />
            <View>
             <Text style={{width: 20, textAlign: 'center', color:'#123', fontSize:16}}>or</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#123'}} />
    </View>
  )
}

export default OrLine

const styles = StyleSheet.create({
    Container:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
    }
})